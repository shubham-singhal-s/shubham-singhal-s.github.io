import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { ScrollerComponent } from './scroller/scroller.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillButtonComponent } from './accessories/skill-button/skill-button.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScrollerComponent,
    SkillsComponent,
    SkillButtonComponent,
    SkillPageComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    LazyLoadImageModule
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
