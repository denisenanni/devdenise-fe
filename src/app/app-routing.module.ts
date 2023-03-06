import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsAndSkillsComponent } from './projects-and-skills/projects-and-skills.component';
import { ArticleComponent } from './article/article.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  // { path: '',   redirectTo: '/under-construction', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent, data: { animation: 'Blog' } }, 
  // {
  //   path: 'article/:id',
  //   component: ArticleComponent,
  //   data: { animation: 'Article' },
  // },
  {
    path: 'projects',
    component: ProjectsAndSkillsComponent,
    data: { animation: 'ProjectsAndSkills' },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { animation: 'Contacts' },
  },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
