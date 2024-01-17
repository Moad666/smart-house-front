import { Component, OnInit } from '@angular/core';
import { Appareil } from '../appareil';
import { AppareilService } from '../appareil.service';
import { Route, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Image } from '../image';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.css']
})
export class AppareilsComponent implements OnInit{
  appareil : Appareil[] | undefined;
  appareils : Appareil = new Appareil();
  categorie : Categorie[] | undefined;

  constructor(private appareilService : AppareilService, private router : Router,private categorieService : CategorieService){}

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;
    });
  }
  updateAppareils(id : number | undefined){
    this.router.navigate(['update-appareil', id]);
      }

  ngOnInit(): void {
    this.getAppareils();
    this.getCategories();



  }
  private getAppareils(){
    this.appareilService.getAppareilsList().subscribe(data => {
    this.appareil = data;

    });
  }
  deleteAppareil(id : number|undefined){
    this.appareilService.deleteAppareil(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

  createAppareil(){
      this.appareilService.createAppareil(this.appareils).subscribe(data=>{
        console.log(data);
        window.location.reload();
      });
      }

      ngSubmit(){
        this.createAppareil();
      }

      image: File | null = null;
      imageMin: File | null = null;
      images: Appareil[] = [];

      onFileChange(event: any) {
        this.image = event.target.files[0];
        this.imageMin = null;
        const fr = new FileReader();
        fr.onload = (evento: any) => {
          this.imageMin = evento.target.result;
        };
        if (this.image) {
          fr.readAsDataURL(this.image);
        }
      }
      onUpload(): void {
        if (this.image) {
          this.appareilService.upload(this.image).subscribe(
            data => {
              this.fetchImages();
            },
            err => {
              this.fetchImages();
            }
          );
        }
      }
      fetchImages(): void {
        this.appareilService.list().subscribe(
          (images) => {
            this.images = images;
          },
          (error) => {
            console.error('Error fetching images:', error);
          }
        );
      }

      switchAllOn() {
        this.appareilService.switchAllOn().subscribe(
          () => {
            console.log('Switched all on successfully');
            // Optionally, update the local state or perform other actions after switching all on
            this.getAppareils();
          },
          error => console.error('Error switching all on:', error)
        );
      }

      switchAllOff() {
        this.appareilService.switchAllOff().subscribe(
          () => {
            console.log('Switched all on successfully');
            // Optionally, update the local state or perform other actions after switching all on
            this.getAppareils();
          },
          error => console.error('Error switching all on:', error)
        );
      }

}
