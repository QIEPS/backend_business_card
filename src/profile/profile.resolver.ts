import { Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { ProfileType } from './profile.type.js';

@Resolver(() => ProfileType)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileType, { nullable: true })
  profile() {
    return this.profileService.findProfile();
  }
}
