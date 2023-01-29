import { Component, OnInit } from '@angular/core';
import { Leaders } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
 
  leaders: Leaders[]

    constructor(private LeadersService: LeadersService ) { }
ngOnInit(){
  this.leaders = this.LeadersService.getLeaders()
}
}
