# Q&A Forum — Design Doc (задание 40)

Status: **designed, not implemented**. Implementation is one focused session once this is approved.

## Why (and why not yet)

A Q&A forum gives UGC and long-tail SEO ("can I extend DTV inside Thailand") that guides don't cover. But UGC without users is an empty room — worse for investor optics than no forum. **Ship when the community page has real (non-seeded) members asking questions in the bot.** The bot's incoming questions are the validation signal: when the same questions repeat weekly, the forum has demand.

## Data model (Prisma)

Follows existing conventions: `Profile` relations, `ListingStatus`-style moderation, cuid ids.

```prisma
enum QuestionStatus {
  OPEN
  ANSWERED   // author accepted an answer
  CLOSED     // moderator closed (spam/duplicate)
}

model Question {
  id        String         @id @default(cuid())
  title     String         @db.VarChar(160)
  body      String         @db.Text
  country   String?        // filter tag: Thailand, Vietnam, ...
  city      String?
  status    QuestionStatus @default(OPEN)
  authorId  String
  author    Profile        @relation("questions", fields: [authorId], references: [id], onDelete: Cascade)
  answers   Answer[]
  createdAt DateTime       @default(now())
  updatedAt DateTime       @updatedAt

  @@index([country, createdAt])
  @@index([status])
}

model Answer {
  id         String   @id @default(cuid())
  body       String   @db.Text
  isAccepted Boolean  @default(false)
  questionId String
  question   Question @relation(fields: [questionId], references: [id], onDelete: Cascade)
  authorId   String
  author     Profile  @relation("answers", fields: [authorId], references: [id], onDelete: Cascade)
  votes      AnswerVote[]
  createdAt  DateTime @default(now())

  @@index([questionId])
}

model AnswerVote {
  answerId  String
  answer    Answer  @relation(fields: [answerId], references: [id], onDelete: Cascade)
  profileId String
  profile   Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)
  value     Int     // +1 only for MVP (no downvotes — small community, downvotes kill it)
  createdAt DateTime @default(now())

  @@id([answerId, profileId]) // one vote per person per answer
}
```

`Profile` gets three back-relations: `questions Question[]`, `answers Answer[]`, `answerVotes AnswerVote[]`.

## Logic rules

- **Ask**: auth required (existing Supabase auth). Title ≤ 160 chars, body ≤ 5000. Zod schema in `src/lib/validations.ts` like the existing forms.
- **Answer**: auth required. Author can accept exactly one answer → question status `ANSWERED`, accepted answer pinned first.
- **Votes**: +1 toggle (press again to retract). Sort answers: accepted first, then votes desc, then oldest first (rewards early helpers).
- **Moderation**: reuse the existing `Report` model + admin page — reports on questions/answers land in the same queue. Moderator can `CLOSED` a question.
- **Rate limit**: max 5 questions and 20 answers per profile per day (server action check) — same pattern as bot quotas.

## Routes

- `/community/questions` — list, filters by country (URL params like /compare), search by title.
- `/community/questions/ask` — form.
- `/community/questions/[id]` — question + answers; slug in URL after id for SEO (`/questions/clx.../can-i-extend-dtv`).
- Server actions in `src/actions/questions.ts` (create/answer/vote/accept), mirroring `src/actions/events.ts` style.

## SEO

- `QAPage` JSON-LD on question pages (Google shows Q&A rich results).
- Question pages in sitemap once count > 0, `changeFrequency: daily`.
- Only `ANSWERED`/`OPEN` indexed; `CLOSED` gets `noindex`.

## Seeding at launch

Take the 10 most common real questions from the bot logs, post them from the founder account, answer them properly. Real questions, real answers, honest byline — not fake users.
