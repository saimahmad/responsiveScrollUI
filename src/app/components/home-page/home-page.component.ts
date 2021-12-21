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

  reviews = [
    {
      name: "rajesh bala",
      comment: "Very reliable service,  friendly staff...."
    },
    {
      name: "arun pathrose",
      comment: "Syed Tanvir did a great job! Very well done, thank you"
    },
    {
      name: "gaurav sahni",
      comment: "Very helpful customer support! They addressed my issue promptly and sent the technician immediately."
    },
    {
      name: "Sujeet Kumar B",
      comment: "Syed Afroz done my tyre change"
    },
    {
      name: "TYRE CARE SHOP",
      comment: "Very convenient & fast service, they will reach out to any part of the city within 30 mins. "
    },
    {
      name: "Sai ram",
      comment: "Very reliable service,  friendly staff...."
    },
  ]

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
