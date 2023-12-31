import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";

import { DynamicContentOneComponent } from "../dynamic-content-one/dynamic-content-one.component";
import { DynamicContentTwoComponent } from "../dynamic-content-two/dynamic-content-two.component";
@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.css']
})
export class ExampleContainerComponent implements OnInit {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
  }

  async addDynamicCompOne() {
    const componentFactory = this.cfr.resolveComponentFactory(DynamicContentOneComponent);
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 1";
  }
  async addDynamicCompTwo() {
    const componentFactory = this.cfr.resolveComponentFactory(DynamicContentTwoComponent);
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = "INPUT DATA 2";
  }

  clearDynamicComp() {
    this.containerRef.clear();
  }



}

function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
  return { ...o1, ...o2 };
}

