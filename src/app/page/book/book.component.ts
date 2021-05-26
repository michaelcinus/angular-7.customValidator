import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<Book> = [];

  constructor( private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      res => this.books = res,
      err => console.log(err)
    )
  }

}
