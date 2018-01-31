import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';

import { FurnitureComponent } from './components/furniture/furniture.component';
import { HomewareComponent } from './components/homeware/homeware.component';
import { ContactComponent } from './components/contact/contact.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [

  {path: '', component: LandingComponent},
  {path: 'cafe', component: CafeComponent},
  {path: 'cafe/suppliers', component: SuppliersComponent},
  {path: 'cafe/menu', component: MenuComponent},
  {path: 'furniture', component: FurnitureComponent},
  {path: 'homeware', component: HomewareComponent},
  {path: 'contact', component: ContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    FurnitureComponent,
    HomewareComponent,
    ContactComponent,
    CafeComponent,
    SuppliersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
