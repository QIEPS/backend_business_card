# Backend Business Card

цифровая-визитка на nestjs, prisma, postgreSQL,база в docker

## Запуск

Нужны nodejs 24, npm и docker

```bash
npm ci
cp .env.example .env
docker compose up -d db
npm run start:dev
```

Откройте apollo sandbox: http://localhost:3000/graphql

Порт по умолчанию — `3000`. Можно изменить `PORT` в `.env`

При запуске приложение само применяет миграции и заполняет базу данными из `seed` при повторном запуске дублей не будет

Пример:

```graphql
query {
  profile {
    name
    description
    links {
      platform
      url
    }
    skills {
      name
    }
    experiences {
      company
      position
      description
      startDate
      endDate
      achievements {
        name
        description
      }
    }
    projects {
      name
      url
    }
  }
}
```

## Запуск на прод

После `npm ci`, настройки `.env`, запуска базы, выполните

```bash
npm run build
npm run start:prod
```
