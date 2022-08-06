interface ImportMetaEnv {
  readonly NAME: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly URL: string;
  readonly GITHUB_URL: string;
  readonly LIST_DRAFT: boolean;
  readonly PAGE_SIZE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
