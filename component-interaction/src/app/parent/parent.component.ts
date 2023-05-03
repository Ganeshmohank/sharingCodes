import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Person } from '../person';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  counter?:number;
  groupName?:string;

  // obj:Person={
  //   name:"Mohan",
  //   gender:"Male",
  //   address:"Banglore"
  // };
  objPerson:Person={
    id:1,
    email:"ASDDSAD@ghakds.com"
    ,gender:"ASDSDSADad"
  }

  data:Person[]=[{
    "id": 1,
    "email": "skelsall0@scribd.com",
    "gender": "Female"
  }, {
    "id": 2,
    "email": "sscudamore1@nps.gov",
    "gender": "Male"
  }, {
    "id": 3,
    "email": "eskinn2@cbslocal.com",
    "gender": "Female"
  }, {
    "id": 4,
    "email": "vspinley3@marketwatch.com",
    "gender": "Male"
  }, {
    "id": 5,
    "email": "lcrollman4@gov.uk",
    "gender": "Female"
  }, {
    "id": 6,
    "email": "ltolemache5@ox.ac.uk",
    "gender": "Female"
  }, {
    "id": 7,
    "email": "cfiggen6@skyrock.com",
    "gender": "Male"
  }, {
    "id": 8,
    "email": "tbayman7@delicious.com",
    "gender": "Male"
  }, {
    "id": 9,
    "email": "hcluney8@reverbnation.com",
    "gender": "Female"
  }, {
    "id": 10,
    "email": "kmanthroppe9@mit.edu",
    "gender": "Female"
  }]
  

  methodA(){
    console.log(this.data);
    
    
  }
  
}
