import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  password = '';

  updatePassword = (event) => {
    this.password = event.target.value
  }

  triggerDownload = () => {
    console.log(this.password)
  }
}
