import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Route, Router } from '@angular/router';
import { Appareil } from '../appareil';
import { AppareilService } from '../appareil.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categorie : Categorie[] | undefined;
  categories : Categorie = new Categorie();
  appareil : Appareil[] | undefined;

  constructor(private categorieService : CategorieService, private router : Router, private appareilService : AppareilService){}

  private getAppareils(){
    this.appareilService.getAppareilsList().subscribe(data => {
    this.appareil = data;
    });
  }

  updateCategorie(id : number | undefined){
this.router.navigate(['update-categorie', id]);
  }
  ngOnInit(): void {
    this.getCategories();
    this.getAppareils();
  }
  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;
    });
  }
  ngSubmit(){
    this.createCategorie();
  }
  createCategorie(){
this.categorieService.createCategorie(this.categories).subscribe(data=>{
  console.log(data);
  Swal.fire({
    icon: 'success',
    title: 'Category Created Successfully!',
    showConfirmButton: true,
    confirmButtonText: 'OK'
  }).then((result)=>{
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
});
  }

  deleteCategorie(id : number|undefined){
    this.categorieService.deleteCategorie(id).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

  goToCatgorieHome(){
this.router.navigate(['/categories']);
  }

}
