import { createEnv } from '@t3-oss/env-core';
import z from 'zod';

const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_PLACEHOLDER: z.string()
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true
});

export type Env = typeof env;
export default env;
