export class ArticleCard {
  private title: string;
  private text: string;
  private blob: ImageBitmap;
}

export class Article extends ArticleCard {
    private resources: Array<string>;
}
