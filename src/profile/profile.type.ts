import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProfessionalLinkType } from './professional-link.type.js';
import { SkillType } from './skill.type.js';
import { ExperienceType } from './experience.type.js';
import { ProjectType } from './project.type.js';

@ObjectType()
export class ProfileType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [ProfessionalLinkType])
  links: ProfessionalLinkType[];

  @Field(() => [SkillType])
  skills: SkillType[];

  @Field(() => [ExperienceType])
  experiences: ExperienceType[];

  @Field(() => [ProjectType])
  projects: ProjectType[];
}
