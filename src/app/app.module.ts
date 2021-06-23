import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { GroceryCardViewComponent } from './components/grocery-card-view/grocery-card-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { UnitComponent } from './components/unit/unit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    GroceriesComponent,
    GroceryCardViewComponent,
    AddGroceryComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
