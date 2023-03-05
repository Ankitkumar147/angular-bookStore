import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  public baseURL: String ="http://localhost:9090/BookStore/"

  constructor(private httpClient: HttpClient) { }

  // addBookdetails(book:Book) : Observable<any>{
  //   console.log(book);
  //   return this.httpClient.post(this.baseURL +"addBook",book);
  // }

  // public addUser(form:any){
  //   return this.httpClient.post(this.baseURL +"register", form)
  // }

  public addbook(BookStoreFormGroup:any): Observable<any>{
    return this.httpClient.post(this.baseURL+"addBook", BookStoreFormGroup)
  }


}
