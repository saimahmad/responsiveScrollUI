import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  menuItems: string[] = ['Home','About Us', 'Careers','Blog','Press','Contact Us']
  selectedTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header-container') as HTMLElement;
    console.log(window.pageYOffset)
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('white-bg');
    } else {
      element.classList.remove('white-bg');
    }
  }

}
