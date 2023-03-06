import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerType: string;
  @Input() text: string;


  constructor() { 

  }

  ngOnInit(): void {
  }

}
