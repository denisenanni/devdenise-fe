export class ArticleCard {
  title: string;
  preview: string;
  image: ImageBitmap;
}

export class Article extends ArticleCard {
    text: HTMLElement;
    resources: Array<string>;
}
