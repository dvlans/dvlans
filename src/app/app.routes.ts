
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { SomosComponent } from './components/somos/somos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'somos', component: SomosComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 
