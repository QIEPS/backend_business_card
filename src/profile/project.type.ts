import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;
}
