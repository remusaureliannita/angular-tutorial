import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonDisable = true;

  /**
   *
   */
  constructor() {
    setTimeout(() => {
      this.buttonDisable = false;
    }, 2000);
  }
}
