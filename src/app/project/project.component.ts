import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Project } from '../model/projet.model';
import { ProjetserviceService } from '../service/projetservice.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project! : Observable<Array<Project>>;
  errorMessage: object | undefined;
  searchFormGroup! :FormGroup;

  constructor(private http:HttpClient ,private projetcService: ProjetserviceService,private fb:FormBuilder,private  router :Router) {

   }

  ngOnInit(): void {
    this.http.get("http://localhost:8085/api/v1/projet").subscribe(
      data=>{
        this.project!=data;
      },error=>{
        console.log(error);
      }
      
    )
  }
  handlegetproject(){
    let kw=this.searchFormGroup?.value.keyword;
    this.project!=this.projetcService.getproject().
    pipe(catchError(error=>{
      this.errorMessage=error.message;
     return throwError(error);

    }
    ));

  }


}
