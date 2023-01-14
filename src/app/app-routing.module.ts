import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {GraphPageComponent} from "./pages/graph-page/graph-page.component";

const routes: Routes = [
  {path: "graph", component: GraphPageComponent},
  {path: "", component: MainPageComponent},
  {path: "**", redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
