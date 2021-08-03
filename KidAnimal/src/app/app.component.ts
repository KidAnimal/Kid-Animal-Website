import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger, 
  state, 
  style, 
  animate, 
  transition,
  query,
  stagger,
}
from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent { 
  title = 'KidAnimal';
}