import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleComponent } from './article/article.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { GobackDirective } from './directives/goback.directive';
import { ProjectsAndSkillsComponent } from './projects-and-skills/projects-and-skills.component';
import { AppService } from './app.service';
import { FooterComponent } from './footer/footer.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TeximateModule } from 'ngx-teximate';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './commons/header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnderConstructionComponent,
    ArticleCardComponent,
    ArticleComponent,
    MenuComponent,
    BlogComponent,
    GobackDirective,
    ProjectsAndSkillsComponent,
    FooterComponent,
    ProjectCardComponent,
    ContactsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TeximateModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
