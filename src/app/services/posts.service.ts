import { Injectable } from '@angular/core';
import { URL } from '../../assets/urls';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {
  url:string = URL;
  
  

  constructor(private http: HttpClient) { }

  public getPosts(){
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url)
        .toPromise()
        .then(
          res => { 
            resolve(res);
          },
          msg => { 
            reject(msg);
            }
        );
    });
    return promise;
  }

}
