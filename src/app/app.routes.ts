import { Routes } from '@angular/router';
import {CreateComponent} from "./components/thought/create/create.component";
import {ListComponent} from "./components/thought/list/list.component";
import {DeleteComponent} from "./components/thought/delete/delete.component";
import {EditComponent} from "./components/thought/edit/edit.component";

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
  },
  {
    path: 'thought/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'thought/edit/:id',
    component: EditComponent
  }
];
