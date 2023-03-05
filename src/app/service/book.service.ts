import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public baseURL: String = "http://localhost:9090/BookStore/";
  
  constructor(private httpClient:HttpClient) { 
  }

    addBookdetails(book:Book) : Observable<any>{
      console.log(book);
      return this.httpClient.post(this.baseURL +"addBook",book);
    }
}
