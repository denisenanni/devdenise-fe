import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsAndSkillsComponent } from './projects-and-skills/projects-and-skills.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  // { path: '',   redirectTo: '/under-construction', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent, data: { animation: 'Blog' } }, 
  {
    path: 'article/:id',
    component: ArticleComponent,
    data: { animation: 'Article' },
  },
  {
    path: 'projects',
    component: ProjectsAndSkillsComponent,
    data: { animation: 'ProjectsAndSkills' },
  },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
