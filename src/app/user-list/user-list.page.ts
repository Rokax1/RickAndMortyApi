import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';
import { CharacterService } from '../Services/character.service';
import { Character } from '../Models/character';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

@ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;


  characters: Character[];
  charactersAdd=[];
  next='';

  total:number;


  constructor(
   private http : HttpClient,
   private _characterService : CharacterService
  ) { }

  ngOnInit() {

    this._characterService.getCharacter().subscribe(
    resp=>{
     // console.log(resp)
      this.characters=resp;
      console.log(this.characters)
    },error=>{
      console.log(error);
    })

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
