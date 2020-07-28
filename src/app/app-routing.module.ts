import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AppComponent },
  { path: '', 
    component: AppComponent,
    children: [
      { path: 'resume', component: ResumeComponent },
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
