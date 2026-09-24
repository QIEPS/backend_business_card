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
];

// TODO: Добавить описание ваших опытов
// TODO: Живые данные
const experiences = [
  {
    id: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
    company: 'ARMOR',
    position: 'Golang/Node.js Backend Developer',
    startDate: new Date('2021-08-10T00:00:00.000Z'),
    endDate: null,
  },
  {
    id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
    company: 'At-Work',
    position: 'Backend-разработчик',
    startDate: new Date('2021-05-01T00:00:00.000Z'),
    endDate: new Date('2021-07-20T00:00:00.000Z'),
  },
];

// TODO: Добавить название достижения
// TODO: Живые данные
const achievements = [
  {
    id: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
    description: 'Go',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
    description: 'TypeScript',
    experienceId: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
  },
  {
    id: '82D0854A-CDA3-4F19-BD90-EA5E4EB30675',
    description: 'Node.js',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: 'D37416F5-753C-4FBB-A480-174D2EAFD92B',
    description: 'PostgreSQL',
    experienceId: 'D1EDFF70-B14D-48F7-8609-053B2E147567',
  },
  {
    id: '77FCDBB6-9772-4AF6-AE06-B342C8068EEE',
    description: 'Docker',
    experienceId: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
  },
];

const projects = [
  { id: 'D1EDFF70-B14D-48F7-8609-053B2E147567', name: 'ARMOR_Project', url: 'https://github.com/' },
  {
    id: 'A4D86AA5-D0B5-408F-9EC0-40DFA392CADC',
    name: 'At-Work_Project',
    url: 'https://github.com/',
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
      name: 'Никита',
      description:
        'Backend Developer с 3 годами коммерческой разработки на Go и 5+ годами в backend-разработке, включая Node.js и TypeScript.',
    },
    create: {
      id: PROFILE_ID,
      name: 'Никита',
      description:
        'Backend Developer с 3 годами коммерческой разработки на Go и 5+ годами в backend-разработке, включая Node.js и TypeScript.',
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
      // TODO: Может сразу делать и в update через ...achievement
      update: {
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
