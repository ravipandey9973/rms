import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartComponent } from './chart/chart.component';
import { PichartComponent } from './pichart/pichart.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardComponent,
    ChartComponent,
    PichartComponent,
    TableComponent   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CanvasJSAngularChartsModule,
    MatTableModule,
    MatTableModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
