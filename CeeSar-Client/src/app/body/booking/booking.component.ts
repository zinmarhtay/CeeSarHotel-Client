import { Component, OnInit } from '@angular/core';
import { __spreadArrays } from 'tslib';

declare let $ :any
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

    rooms = Array(10)
    roomList = Array(1);

  constructor() { }


  ngOnInit(): void {

  }

  onChange(value){
    this.roomList = Array(+value)
  }
}
