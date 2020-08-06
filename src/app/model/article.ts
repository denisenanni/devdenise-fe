export class ArticleCard {
  title: string;
  text: string;
  blob: ImageBitmap;
}

export class Article extends ArticleCard {
    resources: Array<string>;
}
