# Подключение базы и публикация

## Сейчас работает локальная демо-база

На этом Mac уже поднята локальная база (Postgres.app) с демо-данными: профили,
события, жильё и вакансии видны на сайте. Вход (регистрация) пока не работает,
для него нужен Supabase (см. ниже). Это временно, чтобы посмотреть сайт целиком.

Если после перезагрузки Mac разделы стали пустыми, запустите базу одной командой:

```bash
/Applications/Postgres.app/Contents/Versions/latest/bin/pg_ctl \
  -D ~/projects/expat-roadmap-sea/.localdb \
  -l ~/projects/expat-roadmap-sea/.localdb/server.log start
```

Когда подключите Supabase (шаги ниже), локальная база больше не нужна.

---

Чтобы включить вход, профили, события и объявления в облаке, нужен Supabase.
Чтобы сайт был в интернете, нужен Vercel. Оба бесплатны.

## Шаг 1. Supabase (база данных и вход)

1. Зайдите на https://supabase.com и войдите (или создайте аккаунт).
2. New project. Название любое, например `expat-roadmap`. Пароль базы сохраните в заметки.
3. Когда проект создастся, соберите 4 значения:
   - Project Settings -> API -> Project URL
   - Project Settings -> API -> anon public key
   - Project Settings -> Database -> Connection string -> Transaction pooler (порт 6543)
   - Project Settings -> Database -> Connection string -> Direct connection (порт 5432)
4. В папке проекта скопируйте `.env.example` в `.env.local` и вставьте эти 4 значения.
   В строках подключения замените `[password]` на пароль базы из пункта 2.
5. В Supabase: Authentication -> Providers -> включите Email.
6. Authentication -> URL Configuration:
   - Site URL: `http://localhost:3001`
   - Redirect URLs: `http://localhost:3001/auth/callback`

## Шаг 2. Применить схему и демо-данные

В терминале:

```bash
cd ~/projects/expat-roadmap-sea
npm run db:push
npm run db:seed
```

Перезапустите dev-сервер. Появятся демо-профили, события, жильё и работа, заработает регистрация.

## Шаг 3. Vercel (публикация в интернет)

1. Загрузите проект на GitHub (если ещё не загружен):
   ```bash
   cd ~/projects/expat-roadmap-sea
   git add -A && git commit -m "Polestar-style redesign"
   gh repo create expat-roadmap-sea --private --source=. --push
   ```
2. Зайдите на https://vercel.com -> Add New -> Project -> выберите репозиторий `expat-roadmap-sea`.
3. В разделе Environment Variables добавьте те же 4 переменные из `.env.local`.
4. Deploy. Vercel даст адрес вида `expat-roadmap-sea.vercel.app`.
5. Вернитесь в Supabase -> Authentication -> URL Configuration и добавьте:
   - Site URL: адрес с Vercel
   - Redirect URLs: `https://<адрес>/auth/callback`

## Запуск локально

```bash
cd ~/projects/expat-roadmap-sea
npx next dev -p 3001
```

Сайт: http://localhost:3001
