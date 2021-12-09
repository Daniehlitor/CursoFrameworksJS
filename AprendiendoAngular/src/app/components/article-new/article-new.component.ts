import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article = new Article("", "", "", null, null);
  public status!: string;
  public page_tittle: string = "Crear Artículo";
  public is_edit: boolean = false;
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

  constructor(private _article: ArticleService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._article.create(this.article).subscribe(res => {
      this.status = res.status;
      this.article = res.articleStored;

      //Alerta
      Swal.fire(
        "¡Artículo Creado!",
        "El artículo se ha creado correctamente",
        "success"
      );

      this._router.navigate(["/blog"])
    }, error => {
      console.log(error);
      //Alerta
      Swal.fire(
        "¡Error!",
        "El artículo no se ha podido crear",
        "error"
      );
      this.status = "error";
    })
  }

  uploadImage($data: any){
    let image_data = $data.body;
    this.article.image = image_data.file_name;
    console.log(this.article);
  }

}
