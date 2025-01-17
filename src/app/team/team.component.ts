import { Component, ViewChild } from '@angular/core';
import { SupervisorComponent } from "../supervisor/supervisor.component";

@Component({
  selector: 'app-team',
  imports: [SupervisorComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @ViewChild(SupervisorComponent) childelement!:SupervisorComponent

  hidedata(element:any){
    this.childelement.displaynone(element)
  }
  showdata(element2:any){
    this.childelement.displayrestore(element2)
  }
}
