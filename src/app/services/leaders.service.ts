import { Injectable } from '@angular/core';
import { Leaders } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }

  getLeaders() {
    return LEADERS
  }

  getLeader(id: string): Leaders {
    return LEADERS.filter((leader) => (leader.id === id))[0]
  }

  getFeaturedLeader(): Leaders {
    return LEADERS.filter((leader) => leader.featured)[0]
  }
}
