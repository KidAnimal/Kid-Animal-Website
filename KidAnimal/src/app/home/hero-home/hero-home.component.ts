import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

// MODELS
import { ScrollHeightElements, StartScrollHeightEnums, TravelDistanceEnums, TravelSpeedEnums } from 'src/app/models/scrollheight.model';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit, AfterViewInit {

  scrollHeight: number;
  height: number;
  scollPassedPoint: boolean = false;
  scrollElementMap: ScrollHeightElements[] = [];

  constructor() { }

  @ViewChildren('scrollElement') scrollElement: QueryList<ElementRef>;

  @HostListener('window:ScrollTopHeight', ['$event']) onScrollEvent(event): void {
    this.scrollHeight = event.detail;
    if (this.scrollHeight > 100) {
      this.scollPassedPoint = true
    }
    this.getScrollHeights();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScrollElementArray();
  }

  getScrollHeights() {
    this.scrollElementMap.forEach(element => {
      if (element.startScrollHeight < this.scrollHeight) {
          this.scrollElement.toArray().forEach((item) => {
            // Add in the rate of change to the calc math
            let calc;
            // this.scrollHeight <= element.startScrollHeight  ? calc = this.scrollHeight + element.startScrollHeight : calc = this.scrollHeight - element.startScrollHeight;
            calc = this.scrollHeight - element.startScrollHeight;
            // this.scrollHeight > 0 ? this.height = calc : this.height = 0;
            this.height = calc;
            item.nativeElement.style =  `margin-bottom:${this.height}px`;
        });
      }
    });
  }

  createScrollElementArray() {
    this.scrollElement.toArray().forEach((item) => {
      let configArray = item.nativeElement.id.split("-");
      const startScrollHeight: StartScrollHeightEnums = (<any>StartScrollHeightEnums)[configArray[0]];
      const travelDistance: TravelDistanceEnums = (<any>TravelDistanceEnums)[configArray[1]];
      const travelSpeed: TravelSpeedEnums = (<any>TravelSpeedEnums)[configArray[2]];
      this.scrollElementMap.push({
        nativeElement: item.nativeElement,
        scrollTop: item.nativeElement.scrollHeight,
        startScrollHeight: startScrollHeight,
        travelDistance: travelDistance,
        rateOfChange: travelSpeed
      })
    });
  }
}
