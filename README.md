# Expat Roadmap SEA

Платформа для экспатов в Юго-Восточной Азии: профили, события с RSVP, доски жилья и работы/услуг, карта жилья. Next.js 15, Tailwind CSS 4, **Prisma** + **Supabase** (PostgreSQL + Auth).

## Возможности

| Раздел | Функции |
|--------|---------|
| **Community** | Профили экспатов, приватность контактов |
| **Events** | Создание событий, RSVP (Going / Maybe) |
| **Housing** | Доска объявлений о жилье |
| **Jobs** | Вакансии и услуги (фильтр Job / Service) |
| **Map** | Leaflet-карта с seed-отелями HCMC и Ubud |
| **Settings** | Профиль + настройки приватности email / phone / Telegram |

### Приватность контактов

В `/settings/profile` можно задать:

- **Who can see contacts** — Everyone / Logged-in members / Only me
- Чекбоксы **Show email**, **Show phone**, **Show Telegram**

На публичном профиле (`/community/[id]`) контакты показываются только при выполнении этих правил.

## Требования

- Node.js 18.18+
- Проект [Supabase](https://supabase.com) (PostgreSQL + Auth)

## Настройка Supabase

1. Создайте проект в Supabase.
2. Скопируйте `.env.example` → `.env.local` и заполните:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `DATABASE_URL` (Transaction pooler, порт **6543**)
   - `DIRECT_URL` (Direct connection, порт **5432**)
3. В Supabase → Authentication → Providers включите **Email**.
4. Site URL: `http://localhost:3000`, Redirect URLs: `http://localhost:3000/auth/callback`

## Быстрый старт

```bash
cd expat-roadmap-sea
npm install
npm run db:push      # применить схему Prisma к Supabase
npm run db:seed      # демо-профили, события, жильё, работы
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Для полного функционала зарегистрируйтесь (`/login?mode=signup`), создайте профиль в `/settings/profile`, затем публикуйте события и объявления.

## Скрипты

| Команда | Действие |
|---------|----------|
| `npm run dev` | Режим разработки |
| `npm run build` | `prisma generate` + production-сборка |
| `npm run db:push` | Синхронизация схемы с БД |
| `npm run db:seed` | Демо-данные |
| `npm run db:studio` | Prisma Studio |

## Маршруты

| Маршрут | Описание |
|---------|----------|
| `/` | Лендинг |
| `/map` | Карта Leaflet |
| `/community` | Список профилей |
| `/community/[id]` | Профиль экспата |
| `/settings/profile` | Профиль и приватность |
| `/events`, `/events/new`, `/events/[id]` | События и RSVP |
| `/housing`, `/housing/new` | Доска жилья |
| `/jobs`, `/jobs/new` | Работа и услуги |
| `/login` | Вход / регистрация |

## Стек

- **Next.js 15** — App Router, Server Actions
- **Prisma** — ORM для PostgreSQL (Supabase)
- **Supabase Auth** — email + password
- **Tailwind CSS v4**, **next-themes**, **Leaflet**
- **Zod** — валидация форм

## Структура

```
prisma/schema.prisma   # модели Profile, Event, Housing, Job
src/actions/           # server actions
src/app/               # страницы
src/components/        # UI, формы, карточки
src/lib/               # prisma, supabase, privacy helpers
```
