import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddElements = [];
  evenElements = [];
  elements = [];


  OnNewTick(event: { tick: number }) {
    // get number from event

    this.elements.push(event.tick);

    if (event.tick % 2 === 0) {
      this.evenElements.push(event.tick);
    } else {
      this.oddElements.push(event.tick);
    }
  }
}
