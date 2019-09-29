import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubprofileComponent} from './githubprofile/githubprofile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent} from './notfound/notfound.component' ;


const routes: Routes = [
  { path: 'githubprofile', component: GithubprofileComponent},
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '**', component: NotfoundComponent },
  { path: ' ', redirectTo: './homepage', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
