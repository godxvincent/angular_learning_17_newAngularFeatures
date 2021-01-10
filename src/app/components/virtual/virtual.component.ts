import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  personas = Array(500).fill(0);
  @ViewChild( CdkVirtualScrollViewport ) cdkVirtualScrollViewport: CdkVirtualScrollViewport;
  constructor() { }

  ngOnInit(): void {
  }

  irAlFinal(): void {
    this.cdkVirtualScrollViewport.scrollToIndex(this.personas.length);
  }

  irAlInicio(): void {
    this.cdkVirtualScrollViewport.scrollToIndex(0);
  }

  irAlaMitad(): void {
    this.cdkVirtualScrollViewport.scrollToIndex(this.personas.length / 2);
  }

}
