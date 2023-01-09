import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
