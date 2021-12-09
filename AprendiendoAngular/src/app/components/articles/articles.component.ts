import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles!: Article[];

  public url: string;

  constructor() {
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  getHaceCuanto(date: string){
    return moment(date, "", "es", false).fromNow();
  }

}
