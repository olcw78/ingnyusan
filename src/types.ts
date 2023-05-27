interface BlogContent {
  style: string;
  children: ReadonlyArray<{
    _type: string;
    text: string;
  }>;
}

export interface Blog {
  title: string;
  slug: {
    current: string;
  };
  brief: string;
  content: readonly BlogContent[];
  publishedAt: Date;
  isPrivate?: boolean;
  password?: string;
  categories: readonly string[];
}
