import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// general info
import { AboutComponent } from './components/about/about.component';

// portfolio
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/portfolio/projects/projects.component';
import { LoginSignupPageComponent } from './components/portfolio/individual-components/login-signup-page/login-signup-page.component';

// error handling
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    LoginSignupPageComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // Material Components
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
