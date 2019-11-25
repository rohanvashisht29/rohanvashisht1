import { Component, OnInit } from '@angular/core';

import  footerData from '../../assets/json/footer.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer
  constructor() { }

  ngOnInit() {
    this.footer=footerData.footer;
    console.log(this.footer);

  }

}
