import { HttpService } from './https.service';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService{

  public constructor(private httpService:HttpService){

  }

  getAllPosts():Observable<User[]>{
    return this.httpService.get('/users').pipe(map(data => data as User[]));
  }



}
