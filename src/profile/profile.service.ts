import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findProfile() {
    return this.prisma.profile.findFirst({
      include: {
        links: true,
        skills: true,
        projects: true,
        experiences: {
          include: { achievements: true },
        },
      },
    });
  }
}
