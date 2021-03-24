import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Config/Global';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  Url:string;

  constructor(
    private _http: HttpClient,

  ) {
    this.Url = Global.url;
  }


  getCharacter():Observable<any>{
  return this._http.get(this.Url+'character')
  .pipe(
    map(resp=>resp['results'])
  );
}



}
