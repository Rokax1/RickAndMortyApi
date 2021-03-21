import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  characters=[];
  charactersAdd=[];
  next='';


  constructor(
   private http : HttpClient
  ) { }

  ngOnInit() {

    this.http.get<any>("https://rickandmortyapi.com/api/character")
      .subscribe(resp=>{
        this.next=resp.info.next;
        this.characters= resp.results
        console.log(this.characters)
        console.log(this.next)


      });

  }

  loadData(event){


    this.http.get<any>(this.next)
      .subscribe(resp=>{
        this.next=resp.info.next
        this.charactersAdd= resp.results
        this.characters.push(...this.charactersAdd)
        console.log(resp,'infiite')
        event.target.complete();

      });

  }




}
