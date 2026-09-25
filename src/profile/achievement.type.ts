import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AchievementType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}