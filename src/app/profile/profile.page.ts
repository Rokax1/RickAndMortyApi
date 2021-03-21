import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  idPage:string;
  character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
     this.idPage= this.activatedRoute.snapshot.paramMap.get('id')

    this.http.get<any>("https://rickandmortyapi.com/api/character/"+this.idPage)
    .subscribe(resp=>{
      console.log(resp)
      this.character=resp;

    });

  }



}
