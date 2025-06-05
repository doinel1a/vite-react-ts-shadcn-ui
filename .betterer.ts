import { regexp } from '@betterer/regexp';

import { countFiles } from './utils/count-files';

export default {
  'no hack comments': () =>
    regexp(/(\/\/\s*HACK)/i).include(['./packages/**/src/**/*.ts', './packages/**/src/**/*.tsx']),

  'no more JavaScript files': () => countFiles('no more JavaScript files!').include('**/*.js')
};
