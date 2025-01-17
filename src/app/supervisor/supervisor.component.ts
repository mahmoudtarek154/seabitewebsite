import { Component } from '@angular/core';

@Component({
  selector: 'app-supervisor',
  imports: [],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {

  displaynone (Element:any) : void{

    Element.classList.add('d-none')
  }
  displayrestore (Element:any) : void{

    Element.classList.remove('d-none')
  }
}
