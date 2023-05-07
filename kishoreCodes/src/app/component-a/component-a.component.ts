import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  constructor(private service:ServiceService){}
  functionABC(){
    this.service.getDataMethod().subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })

  }
}
