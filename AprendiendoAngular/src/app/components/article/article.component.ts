import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url = Global.url;

  constructor(private _article: ArticleService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._article.getArticle(id).subscribe(response => {
        if (response.article) this.article = response.article;
        else this._router.navigate(["/home"]);
      }, err => {
        console.log(err);
        this._router.navigate(["/home"]);
      });
    });
  }

  onDelete() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una vez eliminado no podras recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._article.delete(this.article._id).subscribe(res => {
          this._router.navigate(["/blog"]);
          Swal.fire(
            '¡Eliminado!',
            'El artículo ha sido eliminado',
            'success'
          );
        }, error => {
          this._router.navigate(["/blog"]);
          //Alerta
          Swal.fire(
            "¡Error!",
            "El artículo no pudo ser eliminado",
            "error"
          );
          console.log(error);
        })
      }
    })
  }

}
