import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public articles!: Article[];

  constructor(private _article: ArticleService) { }

  ngOnInit(): void {
    this._article.getArticles(true).subscribe(response => {
      if(response.articles) this.articles = response.articles;
    }, err => console.log(err));
  }

}
