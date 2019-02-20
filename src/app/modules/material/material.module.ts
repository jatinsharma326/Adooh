import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatToolbar, MatToolbarModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import * as materialModule from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCardModule, MatToolbarModule
    , MatTabsModule, materialModule.MatCardModule, materialModule.MatGridListModule, materialModule.MatButtonModule,
     materialModule.MatInputModule
  ],
  exports: [
    MatCardModule, MatToolbarModule, MatTabsModule, materialModule.MatCardModule, materialModule.MatGridListModule
    , materialModule.MatButtonModule, materialModule.MatInputModule
  ]
})
export class MaterialModule { }
