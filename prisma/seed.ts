import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const PROFILE_ID = '916655E0-6302-42A3-AC50-7071DAABC8D0';

const skills = [
  { id: 'D1EDFF70-B14D-48F7-8609-053B2E147567', name: 'Go' },
  { id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC', name: 'TypeScript' },
  { id: '82D0854A-CDA3-4F19-BD90-EA5E4EB30675', name: 'Node.js' },
  { id: 'D37416F5-753C-4FBB-A480-174D2EAFD92B', name: 'PostgreSQL' },
  { id: '77FCDBB6-9772-4AF6-AE06-B342C8068EEE', name: 'Docker' },
  { id: '62b91a50-e086-4518-874f-84cd1e8329d3', name: 'JavaScript' },
  { id: '63637495-4c44-4f09-9ef6-5bee0bf312c4', name: 'Redis' },
  { id: 'f439fc0f-9fe4-4dac-90e0-e852ac3eecdd', name: 'SQL' },
  { id: 'adeb67c6-28a1-4299-bd6d-8155d0f0e3b5', name: 'Git' },
  { id: '1a25381a-75c7-4595-8a94-1b7f31524ec6', name: 'Linux' },
  { id: '1e050909-2540-44b1-9e53-b031f30d3ab0', name: 'Kubernetes' },
  { id: '65be4b03-d1dd-4c51-9d78-f87444a29615', name: 'NATS' },
  { id: '30b4cf17-b7a6-4407-ac77-91dae2a658d5', name: 'RabbitMQ' },
  { id: '030b3ae7-7b29-4feb-a3cd-23ea2b9043af', name: 'GraphQL' },
  { id: '9600e17c-14cb-4752-9075-230d98b5a007', name: 'REST API' },
];

const experiences = [
  {
    id: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
    company: 'ARMOR',
    position: 'Golang/Node.js Backend Developer',
    description:
      'Разработка подписочной платформы примерно из 20 микросервисов: заказы, подписки, биллинг, статистика и партнёрские интеграции. Разрабатывал сервисы на Go и переносил backend-логику с Node.js и TypeScript.',
    startDate: new Date('2021-08-01T00:00:00.000Z'),
    endDate: null,
  },
  {
    id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
    company: 'At-Work',
    position: 'Backend-разработчик',
    description:
      'Разработка backend сервиса проверки автомобилей: интеграции с внешними API, обработка данных и формирование отчётов.',
    startDate: new Date('2021-03-01T00:00:00.000Z'),
    endDate: new Date('2021-07-01T00:00:00.000Z'),
  },
];

const achievements = [
  {
    id: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
    name: 'Оптимизация PostgreSQL',
    description:
      'Ускорил отчётную выборку по заказам и подпискам в 8–13 раз: с 4 с до 300–500 мс за счёт оптимизации PostgreSQL.',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
    name: 'Модуль «Проверка авто»',
    description:
      'Разработал с нуля backend-модуль «Проверка авто» с интеграциями внешних API и формированием отчётов.',
    experienceId: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
  },
  {
    id: '82D0854A-CDA3-4F19-BD90-EA5E4EB30675',
    name: 'Сервисы подписочной платформы',
    description:
      'Разрабатывал сервисы заказов, подписок и биллинга на Go и переносил backend-логику с Node.js и TypeScript.',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: 'D37416F5-753C-4FBB-A480-174D2EAFD92B',
    name: 'Обработка событий',
    description:
      'Выстраивал обработку событий через NATS и RabbitMQ с retry, идемпотентностью и DLQ.',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: '77FCDBB6-9772-4AF6-AE06-B342C8068EEE',
    name: 'Ускорение интеграций и отчётов',
    description:
      'Сократил время получения данных из внешних API на 40% и ускорил формирование отчётов на 50%.',
    experienceId: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
  },
];

const projects = [
  {
    id: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
    name: 'Backend Business Card',
    url: 'https://github.com/QIEPS/backend_business_card',
  },
  {
    id: '82D0854A-CDA3-4F19-BD90-EA5E4EB30675',
    name: 'Timestamp Debug',
    url: 'https://github.com/QIEPS/timestamp-debug',
  },
];

const professionalLinks = [
  {
    id: '82D0854A-CDA3-4F19-BD90-EA5E4EB30675',
    platform: 'GitHub',
    url: 'https://github.com/QIEPS',
  },
];

try {
  await prisma.profile.upsert({
    where: { id: PROFILE_ID },
    update: {
      name: 'Никита Акимов',
      description:
        'Go Backend Developer. Разрабатываю подписочные платформы, биллинг и интеграции; работаю с PostgreSQL, обработкой событий и высокими нагрузками.',
    },
    create: {
      id: PROFILE_ID,
      name: 'Никита Акимов',
      description:
        'Go Backend Developer. Разрабатываю подписочные платформы, биллинг и интеграции; работаю с PostgreSQL, обработкой событий и высокими нагрузками.',
    },
  });

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { id: skill.id },
      update: {
        name: skill.name,
        profileId: PROFILE_ID,
      },
      create: {
        ...skill,
        profileId: PROFILE_ID,
      },
    });
  }

  for (const experience of experiences) {
    await prisma.experience.upsert({
      where: { id: experience.id },
      update: {
        company: experience.company,
        position: experience.position,
        description: experience.description,
        startDate: experience.startDate,
        endDate: experience.endDate,
        profileId: PROFILE_ID,
      },
      create: {
        ...experience,
        profileId: PROFILE_ID,
      },
    });
  }

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { id: achievement.id },
      update: {
        name: achievement.name,
        description: achievement.description,
        experienceId: achievement.experienceId,
      },
      create: {
        ...achievement,
      },
    });
  }

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {
        name: project.name,
        url: project.url,
        profileId: PROFILE_ID,
      },
      create: {
        ...project,
        profileId: PROFILE_ID,
      },
    });
  }

  await prisma.project.deleteMany({
    where: {
      id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
      profileId: PROFILE_ID,
      name: 'At-Work_Project',
      url: 'https://github.com/',
    },
  });

  for (const link of professionalLinks) {
    await prisma.professionalLink.upsert({
      where: { id: link.id },
      update: {
        platform: link.platform,
        url: link.url,
        profileId: PROFILE_ID,
      },
      create: {
        ...link,
        profileId: PROFILE_ID,
      },
    });
  }
} finally {
  await prisma.$disconnect();
}
