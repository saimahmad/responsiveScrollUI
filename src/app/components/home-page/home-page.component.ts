import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  menuItems: string[] = ['Home','About Us', 'Careers','Blog','Press','Contact Us']
  constructor() { }

  ngOnInit(): void {
  }

}
