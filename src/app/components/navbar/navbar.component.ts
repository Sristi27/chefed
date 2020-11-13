import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    let image=document.querySelector('.logo-img');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-change-on-scroll');
      image.setAttribute('src',"assets/images/Final Logo1.svg")
    } else {
      element.classList.remove('navbar-change-on-scroll');
      image.setAttribute('src',"assets/images/Group 3.svg")
    }
  }
  ngOnInit(): void {
  }

}
