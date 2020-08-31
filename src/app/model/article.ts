export class Article {
  id: number;
  title: string;
  outline: string;
  sections: ArticleSection;
  resources: any;
  images: any;
}

export class ArticleCard {
  id: number;
  title: string;
  outline: string;
}


export class ArticleSection {
  id: number;
  section: string;
  imageLink: string;

}
