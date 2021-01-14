import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
  fruechte: any = [
    {name:'Orange'},
    {name:'Banane'},
    {name:'Apfel'}
    ];
  
    fruechte2: any = [
      {name:'Orange', imgURL:"https://png.pngtree.com/element_our/20190601/ourmid/pngtree-physical-orange-slices-image_1364049.jpg"},
      {name:'Banane', imgURL:"https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/banana.png"},
      {name:'Apfel', imgURL:"https://www.searchpng.com/wp-content/uploads/2019/05/Apple-PNG-images-715x715.jpg"}
      ];

  constructor() { }

  ngOnInit() {
  }

}
