import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles!: Article[];
  public searchString!: string;

  constructor(private _article: ArticleService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.searchString = params["search"];
      this._article.search(this.searchString).subscribe(res => {
        if (res.articles) this.articles = res.articles;
      }, error => {
        this.articles = [];
        console.log(error);
      });
    })
  }

}
