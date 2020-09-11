import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilitydetail',
  templateUrl: './facilitydetail.component.html',
  styleUrls: ['./facilitydetail.component.css']
})
export class FacilitydetailComponent implements OnInit {

  contactInfo = [
    {icon: 'card-icon fa fa-envelope fa-2x', content: 'ceesar-fitness@gmail.com'},
    {icon: 'card-icon fa fa-phone fa-2x', content: '(+95) 95076244'},
    {icon: 'card-icon fa fa-map-marker-alt fa-2x', content: '4th Floor'},
    {icon: 'card-icon fa fa-clock fa-2x', content: '5AM-8PM'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
