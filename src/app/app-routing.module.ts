import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilsComponent } from './appareils/appareils.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateAppareilComponent } from './update-appareil/update-appareil.component';

const routes: Routes = [
  {path : "appareils", component : AppareilsComponent},
  {path : "categories", component : CategoriesComponent},
  {path : "update-categorie/:id", component : UpdateCategorieComponent},
  {path : "update-appareil/:id", component : UpdateAppareilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
