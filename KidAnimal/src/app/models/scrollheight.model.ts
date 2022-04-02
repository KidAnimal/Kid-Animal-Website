export class ScrollHeight {
  homeScrollHeight?: number;
  aboutScrollHeight?: number;
  portfolioScrollHeight?: number;

  constructor(options: any) {
      this.homeScrollHeight = options.homeScrollHeight;
      this.aboutScrollHeight = options.aboutScrollHeight;
      this.portfolioScrollHeight = options.portfolioScrollHeight;
  }
}

export class ScrollHeightElements {
  nativeElement?: any;
  scrollTop?: number;
  startScrollHeight?: StartScrollHeightEnums;
  travelDistance: TravelDistanceEnums;
  rateOfChange?: TravelSpeedEnums;
  offsetTop?: number;
  offsetHeight?: number;
  bottom?: number;

  constructor(options: any) {
    this.nativeElement = options.nativeElement;
    this.scrollTop = options.scrollTop || 0;
    this.startScrollHeight = options.startScrollHeight || 0;
    this.travelDistance = options.travelDistance || TravelDistanceEnums.medium;
    this.rateOfChange = options.rateOfChange || TravelSpeedEnums.paced;
    this.offsetTop = options.offsetTop || 0;
    this.offsetHeight = options.offsetHeight || 0;
    this.bottom = options.marginBottom || 0;
  }
}

export enum StartScrollHeightEnums {
  vClose = 300,
  close = 400,
  norm = 500,
  far = 600,
  vFar = 700,
  FarAF = 800
}

export enum TravelDistanceEnums {
  xshort = 100,
  short = 200,
  medium = 300,
  long = 400,
  extraLong = 500,
  wtf = 600
}

export enum TravelSpeedEnums {
  vSlow  = 1,
  slow = 2,
  paced = 3,
  fast = 4,
  faster = 5,
  fastest = 6,
  wtfIsThisSeriously = 7
}
