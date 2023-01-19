import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetserviceService {


  constructor( private http :HttpClient) { }
  public getproject() : Observable<Array<Project>>{
    return  this.http.get<Array< Project>>(environment.backendHost+"/api/v1/projet");

  }
}
