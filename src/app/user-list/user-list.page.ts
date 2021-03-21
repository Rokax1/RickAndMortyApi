import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

@ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;


  characters=[

  ];
  charactersAdd=[];
  next='';

  total:number;


  constructor(
   private http : HttpClient
  ) { }

  ngOnInit() {


    this.http.get<any>("https://rickandmortyapi.com/api/character")
      .subscribe(resp=>{
        this.next=resp.info.next;
        this.total=resp.info.count;
        this.characters= resp.results
        console.log(this.characters)
        console.log(this.next)


      });

  }

  loadData(event){

    if (this.characters.length >=  this.total  ) {
      event.target.complete();
      this.infiniteScroll.disabled=true;
      return;
    }

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
