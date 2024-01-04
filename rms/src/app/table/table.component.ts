import { Component } from '@angular/core';
import {studentData} from '../student.json';
interface Student{
 
  name: string;
  logindate:string;
  phonenumber:string;
  loggedfrom:string;
  status:string;
  option:string;
  details:string;
  
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  students: Student[]=studentData;
  displayedColumns: string[] = [ 'name', 'logindate', 'phonenumber','loggedfrom','status','option','details'];
  dataSource = this.students;

}

