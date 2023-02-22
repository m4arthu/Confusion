import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[]
  errMsg: string
  constructor(private LeadersService: LeadersService,
    @Inject('baseURL') public baseURL) { }
  ngOnInit() {
    this.LeadersService.getLeaders()
      .subscribe({
        next:leaders => this.leaders = leaders, 
        error: (errmsg:any) => this.errMsg = errmsg})
    }
  }

