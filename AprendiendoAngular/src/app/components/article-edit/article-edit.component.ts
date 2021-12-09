import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article = new Article("", "", "", null, null);
  public status!: string;
  public page_tittle: string = "Editar Artículo";
  public is_edit: boolean = true;
  public url = Global.url;
  public afuConfig: AngularFileUploaderConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .gif, .png, .jpeg",
    uploadAPI: {
      url: Global.url + "upload-image"
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      attachPinBtn: 'Hola?'
    },
    maxSize: 100
  };

  constructor(private _article: ArticleService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._article.update(this.article._id, this.article).subscribe(res => {
      this.status = res.status;
      this.article = res.article;
      //Alerta
      Swal.fire(
        "¡Artículo Editado!",
        "El artículo se ha editado correctamente",
        "success"
      );
      this._router.navigate(["/blog/articulo", this.article._id])
    }, error => {
      console.log(error);
      //Alerta
      Swal.fire(
        "¡Error!",
        "El artículo no se ha podido editar",
        "error"
      );
      this.status = "error";
    })
  }

  uploadImage($data: any){
    let image_data = $data.body;
    this.article.image = image_data.file_name;
  }

  getArticle(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._article.getArticle(id).subscribe(response => {
        if (response.article) this.article = response.article;
        else this._router.navigate(["/home"]);
        console.log(this.article);
      }, err => {
        console.log(err);
        this._router.navigate(["/home"]);
      });
    });
  }

}
