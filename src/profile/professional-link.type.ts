import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfessionalLinkType {
  @Field(() => ID)
  id: string;

  @Field()
  platform: string;

  @Field()
  url: string;
}
