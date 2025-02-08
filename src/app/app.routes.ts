import { Routes } from '@angular/router';
import {CreateComponent} from "./components/thought/create/create.component";
import {ListComponent} from "./components/thought/list/list.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];
