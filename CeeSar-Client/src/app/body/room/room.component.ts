import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms$: Observable<any[]>;


  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms();
  }

  objToArray(obj) {
   return Object.keys(obj);
      }
  }
