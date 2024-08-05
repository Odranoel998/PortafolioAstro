/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly PUBLIC_SERVICE_ID: string;
    readonly PUBLIC_TEMPLATE_ID: string;
    readonly PUBLIC_KEY: string;
    readonly PUBLIC_KEY_EMAIL: string

  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv; 
  }