import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  room;

  

  constructor(private roomService: RoomService , private  route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe( data => this.room = data);
    console.log(this.room);
   
   }
}
