export interface GetArticlesResponse {
  articles: Article[];
}

export interface GetArticleResponse {
  article: Article;
  error: string | null;
}

export interface GetRelatedArticlesResponse {
  articles: Article[];
  error: string | null;
}

export interface Article {
  image?: string;
  slug?: string;
  title?: string;
  type?: string;
  tags?: string[];
  content?: any[];
}
