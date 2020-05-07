import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree.component';
import {PrintTreeComponent} from './printTree.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TreeComponent, PrintTreeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
