import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingroom',
  templateUrl: './bookingroom.component.html',
  styleUrls: ['./bookingroom.component.css']
})
export class BookingroomComponent implements OnInit {

  rooms = Array(10);
  roomList = Array(1);



  constructor() { }

  ngOnInit(): void {
  }


  onChange(value){
    this.roomList = Array(+value);
  }
}
