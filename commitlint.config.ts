import type { UserConfig } from '@commitlint/types';

import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  // See the Atom preset convention here: https://www.npmjs.com/package/conventional-changelog-atom
  // Conventional Changelog creates a changelog based on commit messages.
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only changes
        'chore', // Maintenance: tooling, deps, etc.
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'test', // Add or update tests
        'other'
      ]
    ]
  }
  // ...
};

export default Configuration;
