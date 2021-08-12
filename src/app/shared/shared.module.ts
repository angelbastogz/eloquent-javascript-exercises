import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ArrayFormattingPipe } from './pipes/array-formatting.pipe';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    ArrayFormattingPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SidenavComponent,
    ToolbarComponent,
    ArrayFormattingPipe
  ]
})
export class SharedModule { }
