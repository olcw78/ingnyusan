export interface Blog {
  title: string;
  slug: {
    current: string;
  };
  content: {
    style: string;
    children: Array<{
      _type: string;
      text: string;
    }>;
  };
  publishedAt: Date;
  isPrivate: boolean;
  password?: string;
  categories?: ReadonlyArray<string>;
}
