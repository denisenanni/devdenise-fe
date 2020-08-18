import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbActionsModule,
  NbSidebarModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
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
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
