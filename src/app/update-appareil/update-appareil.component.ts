import { Component, OnInit } from '@angular/core';
import { Appareil } from '../appareil';
import { AppareilService } from '../appareil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-update-appareil',
  templateUrl: './update-appareil.component.html',
  styleUrls: ['./update-appareil.component.css']
})
export class UpdateAppareilComponent implements OnInit{
  appareils : Appareil = new Appareil();
  categorie : Categorie[] | undefined;
  id : number|undefined;

  private getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
    this.categorie = data;
    });
  }
  constructor(private categorieService : CategorieService,private appareilService : AppareilService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.getCategories();
    this.id = this.route.snapshot.params['id'];
  this.appareilService.getAppareilById(this.id).subscribe(data =>{
    this.appareils = data;
  });
  }

  goToAppareilHome(){
    this.router.navigate(['/appareils']);
      }

      onSubmit(){
        this.appareilService.updateAppareil(this.id, this.appareils).subscribe(data =>{
          this.goToAppareilHome();
        });
      }

}
