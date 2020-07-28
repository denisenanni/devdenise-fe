import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbIconModule, 
  NbStepperModule, NbCardModule, NbButtonModule, NbInputModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ResumeComponent } from './resume/resume.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule,
    NbIconModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
