import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public BookStoreFormGroup : FormGroup;
  public book : Book = new Book();

  constructor(private bookService: BookService){
              
    this.BookStoreFormGroup = new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        author: new FormControl(),
        price : new FormControl(),
        quantity: new FormControl(),
        Image: new FormControl(),
      });
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.book=this.BookStoreFormGroup.value;
    console.log(this.book);
    this.bookService.addBookdetails(this.book).subscribe((data)=>
    console.log(data));
    alert('Book Added');
  }

  

}
