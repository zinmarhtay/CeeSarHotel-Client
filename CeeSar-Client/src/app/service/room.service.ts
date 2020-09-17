import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  private _rooms = [
    {
      id: 1,

      name: 'Standard Room',

      photos: [
        'assets/HotelPhoto/standard.jpg',
        'assets/HotelPhoto/baesin1.jpg',
        'assets/HotelPhoto/bathroom2.jpg',
        'assets/HotelPhoto/toilet1.jpg',
        'assets/HotelPhoto/towel4.jpg'
      ],

      properties: {
        Accommdates: 2,
        Size: ' 230 sq ft',
        Beds: '2 Double(s)'

      },

      description: `Functional and comfortable. Sit back and enjoy one of our brand new 280 square foot Standard Rooms. Complete with courtyard views, stylish decor and natural light, our Standard Rooms are the perfect combination of function and comfort. Ideally
      suited for today’s business or leisure travelers.`,

      amenities: {
        WiFi: 'fas fa-wifi',
       ' A/C': 'fas fa-snowflake',
        Phone: 'fas fa-phone',
        TV: 'fas fa-tv',
        MiniBar: 'fas fa-cocktail',
        Breakefast: 'fas fa-utensils',
        Shower: 'fas fa-shower'
      }
    },

    {
      id: 2,

      name: 'Suite Room',

      photos: [
        'assets/HotelPhoto/suite.jpg',
        'assets/HotelPhoto/baesin2.jpg',
        'assets/HotelPhoto/bathroom.jpg',
        'assets/HotelPhoto/toilet2.jpg',
        'assets/HotelPhoto/towel2.jpg'
      ],

      properties: {
        Accommdates: 2,
        Size: ' 260 sq ft',
        Beds: '2 Double(s)'

      },

      description: `Affordable luxury. Our Junior Suites are the perfect option if you’re looking for a little extra luxury. With an open 400 square foot floor plan, the Junior Suites offer the extra space you need to spread out and enjoy the breathtaking views of the city skyline.`,

      amenities: {

        WiFi: 'fas fa-wifi',
        ' A/C': 'fas fa-snowflake',
         Phone: 'fas fa-phone',
         TV: 'fas fa-tv',
         MiniBar: 'fas fa-cocktail',
         Breakefast: 'fas fa-utensils',
         Bathtube: 'fas fa-bath',
         Taxi: 'fas fa-taxi'

      }

    }

    ,
    {
      id: 3,

      name: 'Superior Room',

      photos: [
        'assets/HotelPhoto/superior.jpg',
        'assets/HotelPhoto/baesin3.webp',
        'assets/HotelPhoto/bathroom4.jpg',
        'assets/HotelPhoto/toilet3.jpg',
        'assets/HotelPhoto/superiortowel.jpg'
     ],

      properties: {
        Accommdates: 2,
        Size: ' 290 sq ft',
        Beds: '1 King(s)'

      },

      description: `Elegant simplicity. Our Superior Rooms give you the space and privacy you need to work or play on the road. The spacious 380 square foot rooms include an intimate lounge area, business workstation and views of the courtyard. Complete with all the regular amenities, our Superior Rooms also include a daily newspaper and water bottles.`,

      amenities: {

        WiFi: 'fas fa-wifi',
        ' A/C': 'fas fa-snowflake',
         Phone: 'fas fa-phone',
         TV: 'fas fa-tv',
         MiniBar: 'fas fa-cocktail',
         Breakefast: 'fas fa-utensils',
         Bathtube: 'fas fa-bath',
         'Lauggage-cart': 'fas fa-luggage-cart',
         Workspace: 'fas fa-briefcase',
         Car: 'fas fa-shuttle-van'
        }

    }
    ,
    {
      id: 4,

      name: 'Family Room',

      photos: [
        'assets/HotelPhoto/family.jpg',
        'assets/HotelPhoto/baesin4.jpg',
        'assets/HotelPhoto/familybathroom.jpg',
        'assets/HotelPhoto/toilet4.jpg',
        'assets/HotelPhoto/towel.jpg'
      ],

      properties: {
        Accommdates: 4,
        Size: ' 320 sq ft',
        Beds: '2 King(s)'
      },

      description: `Family rooms with sofa bed, are modern decorated and offering comfortable hospitality to a family with 2 children, or a company of 4 adults. They are totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV, room cleaning touch system.`,

      amenities: {

        WiFi: 'fas fa-wifi',
        ' A/C': 'fas fa-snowflake',
         Phone: 'fas fa-phone',
         TV: 'fas fa-tv',
         MiniBar: 'fas fa-cocktail',
         Breakefast: 'fas fa-utensils',
         Bathtube: 'fas fa-bath',
         'Lauggage-cart': 'fas fa-luggage-cart',
         Workspace: 'fas fa-briefcase',
         Car: 'fas fa-shuttle-van'

      }

    }
  ];

  private rooms$ = from([this._rooms]);

  findByid(id){
    return this._rooms.find(room => room.id == id );
  }

  getRooms(){
    return this.rooms$;
  }
}
