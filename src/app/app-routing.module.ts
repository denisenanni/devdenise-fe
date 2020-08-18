import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';


const routes: Routes = [
 // { path: '',   redirectTo: '/under-construction', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', component: HomeComponent },
    
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
