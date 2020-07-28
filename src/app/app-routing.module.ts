import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  { path: '', 
    component: AppComponent,
    children: [
      { path: 'resume', component: ResumeComponent },
      { path: 'contact-form', component: ContactFormComponent },
    ]
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
