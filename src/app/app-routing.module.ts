import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', 
    component: AppComponent,
    children: [
      { path: 'resume', component: ResumeComponent },
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
