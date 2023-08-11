import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() progress = 0;
  @Input() backgroundColor!: string;
  @Input() progressColor!: string;
  constructor() { }



  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {

    console.log("ngAfterContentInit");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck", this.progress)
  }
  ngOnChanges(changes: SimpleChanges): void {

    if ("progress" in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
    console.log("ngOnChanges", this.progress)
  }
  ngOnInit(): void {
    console.log("ngOnInit", this.progress)
  }
  IncreaseWidth() {
    this.progress = this.progress + 1
  }
  ReduceWidth() {
    this.progress = this.progress - 1
  }


}


