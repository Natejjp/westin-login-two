import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CorrectPageComponent} from "./correct-page/correct-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'correct-page', component: CorrectPageComponent},
];

@NgModule({
  imports: [(RouterModule.forRoot(routes))],
  exports: [RouterModule]
})

export class AppRoutingModule {}
