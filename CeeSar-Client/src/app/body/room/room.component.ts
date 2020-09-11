import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  roomprice = [
      {icon : '<i class="fas fa-dollar-sign"></i>' , price : 150},
      {icon : '<i class="fas fa-dollar-sign"></i>' , price : 250},
      {icon : '<i class="fas fa-dollar-sign"></i>' , price : 350},
      {icon : '<i class="fas fa-dollar-sign"></i>' , price : 450}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
