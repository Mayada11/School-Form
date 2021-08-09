import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, ViewChild, ElementRef, AfterViewInit ,OnInit, Output, EventEmitter } from '@angular/core';
export interface Classes{
  id?:number,
  website:'',
  sectionName: '',
  className: '',
  Grades: ''  
}
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor() {
    this.classes=[{
      id:0,
      website:this.website,
      sectionName:'',
      className:'',
      Grades:''
    }]
   }

  ngOnInit(): void {
  }

  websiteList: any = ['Cairo English School', 'British international schools in Cairo', 'Saint Georges college']
  websiteGrade:any = [1,2,3];
  classes
  
  
website:'';
@Output() classesCreates = new EventEmitter<Classes>();

  submit(classForm){
    this.classes[0].website = this.website;
    console.log(classForm.value);
    for(let item of this.classes){
      this.classesCreates.emit(item);
    }
   
  }
  changeWebsite(e) {
    console.log(e.target.value);
  }
  addClass(e){
    e.stopPropagation();
    e.preventDefault();
    this.classes[0].website = this.website;
    this.classes.push({
      id: this.classes.length + 1,
      website:this.website,
      sectionName: '',
      className: '',
      Grades: ''
    });

  }
  deleteRow(i){
    this.classes.splice(i, 1);
  }
  cancelAction(classForm){
    classForm.reset();
    this.classes=[]
    this.classes.push({
      id:0,
      website:this.website,
      sectionName: '',
      className: '',
      Grades: ''
    });
  }




}
