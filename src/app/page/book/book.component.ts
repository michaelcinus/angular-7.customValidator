import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { validateCodISBN } from 'src/app/validators/CustomValidator';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<Book> = [];
  bookForm: FormGroup;

  constructor( private bookService: BookService, private formBuilder: FormBuilder) { 
    this.bookForm = this.formBuilder.group({
      title: ['', []],
      author: ['', []],
      version: ['', []],
      ispn: ['', [validateCodISBN]]
    })
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      res => this.books = res,
      err => console.log(err)
    )
  }

  submit() {
    console.log(this.bookForm.value);
  }

}
