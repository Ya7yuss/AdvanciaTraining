import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { FilsComponent } from './fils/fils.component';
import { Cv2Component } from './cv2/cv2.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { ListeTodoComponent } from './liste-todo/liste-todo.component';
import { ListeFormComponent } from './liste-form/liste-form.component';
import { ListeDisplayComponent } from './liste-display/liste-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorComponent,
    CvComponent,
    FilsComponent,
    Cv2Component,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    NgClassComponent,
    RainbowDirective,
    ListeTodoComponent,
    ListeFormComponent,
    ListeDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
