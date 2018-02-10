import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = 'Tuna';
  toggleButton: false;
  isHidden: false;
  activatedButton: boolean;
  secret = [];

  onToggleButton() {
    this.activatedButton = true;
    // increment secret with 1
    // this.secret.push(this.secret.length + 1);
    // push current timestamp after click
    this.secret.push(new Date());
  }
}
