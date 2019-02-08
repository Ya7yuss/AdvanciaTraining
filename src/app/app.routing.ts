import {Routes, RouterModule} from '@angular/router'
import { ListeTodoComponent } from './liste-todo/liste-todo.component';
import { Cv2Component } from './cv2/cv2.component';
import { ListeEmbaucheComponent } from './liste-embauche/liste-embauche.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { ColorComponent } from './color/color.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';

const ROUTING : Routes = [
  {path: 'cv', component: Cv2Component},
  {path: '', component: ListeEmbaucheComponent},
  {path: 'ngClass', component: NgClassComponent},
  {path: 'color/:couleur/:param', component: ColorComponent},
  {path: 'color', component: ColorComponent},
  {path: 'detail/:id', component: CvDetailComponent},
  {path: 'form', component: LoginComponent}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTING);
