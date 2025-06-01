/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown
}

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
  readonly VITE_REACT_APP_VERSION: string
  readonly VITE_API_URI?: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnvironment
}