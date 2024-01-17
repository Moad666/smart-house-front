import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateAppareilComponent } from './update-appareil/update-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilsComponent,
    CategoriesComponent,
    UpdateCategorieComponent,
    UpdateAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
