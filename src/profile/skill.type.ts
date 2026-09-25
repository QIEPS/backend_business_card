import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}