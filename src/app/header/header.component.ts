import { Component, OnInit } from '@angular/core';
import headerData from '../../assets/json/components.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header

  constructor() { }

  ngOnInit() {
    this.header = headerData.header;
  }

}
