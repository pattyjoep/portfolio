import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: "",
    component: AboutComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "contact",
    component: AboutComponent
  },

  {
    path: "**",
    pathMatch: 'full',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
