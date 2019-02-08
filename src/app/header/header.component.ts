import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private route: Router) { }

  ngOnInit() {
  }
  naviguer(param)
  {
    let link = [param];
    if (param === 'color'){
      link.push('blue');
      link.push('abc');
    }
    console.log(link);
    this.route.navigate(link);
  }
}
