import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  showInfo = false;
  showLogInfo= false;

  LogInfo() {
    this.showLogInfo = !this.showLogInfo;
  }
  
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
