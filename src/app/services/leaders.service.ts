import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'; 
import { catchError, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor(private Http:HttpClient,
    private processHTTPMsg: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.Http.get<Leader[]>(baseURL + 'leaders')
    .pipe(catchError(this.processHTTPMsg.handleError))
  }
  getLeader(id: string): Observable<Leader> {
    return this.Http.get<Leader>(baseURL + 'leaders/' + id)
    .pipe(catchError(this.processHTTPMsg.handleError))
  } 
  getFeaturedLeader(): Observable<Leader> {
    return this.Http.get<Leader>(baseURL + 'leaders?featured=true')
    .pipe(map(leaders => leaders[0]))
    .pipe(catchError(error => error))
  }
 
}
