import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() ValueChange = new EventEmitter<{ tick: number }>();
  public StartDisabled = false;
  private Timer: any;
  private Ticks: number;

  constructor() {
    this.Ticks = 0;
  }


  ngOnInit() {

  }

  public OnStart(event: any) {
    this.Timer = setInterval(() => {
      this.StartDisabled = true;
      this.Ticks++;
      this.ValueChange.emit({tick: this.Ticks});
    }, 1000);
  }

  public OnStop($event: any) {
    clearInterval(this.Timer);
    this.StartDisabled = false;
  }
}
