import { type SchemaTypeDefinition } from 'sanity'

import certificate from './schemaTypes/certificate'
import pageInfo from './schemaTypes/pageInfo'
import project from './schemaTypes/project'
import skill from './schemaTypes/skill'
import social from './schemaTypes/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [certificate, project, pageInfo, skill, social],
}
