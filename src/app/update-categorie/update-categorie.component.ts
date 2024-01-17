import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute } from '@angular/router';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit{
  categories : Categorie = new Categorie();
  id : number|undefined;

  constructor(private categorieService : CategorieService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  this.categorieService.getCategorieById(this.id).subscribe(data =>{
    this.categories = data;
  });
  }
  goToCatgorieHome(){
    this.router.navigate(['/categories']);
      }
  onSubmit(){
    this.categorieService.updateCategorie(this.id, this.categories).subscribe(data =>{
      this.goToCatgorieHome();
    });
  }





}
