import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AchievementType } from './achievement.type.js';

@ObjectType()
export class ExperienceType {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  description: string;

  @Field()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date | null;

  @Field(() => [AchievementType])
  achievements: AchievementType[];
}
