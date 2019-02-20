import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'angular-image-slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, SliderModule, NgbModule, CarouselModule,
  ],
  exports: [SliderModule, NgbModule, CarouselModule]
})
export class MergeModule { }
