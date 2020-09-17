import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {

  room;

  constructor(private route: ActivatedRoute , private roomservice: RoomService ) { }

  ngOnInit(): void {

    this.route.params.subscribe (params => this.room = this.roomservice.findByid(+ params.id) );
  }

  objToArray(obj) {
    return Object.keys(obj);
       }


}
