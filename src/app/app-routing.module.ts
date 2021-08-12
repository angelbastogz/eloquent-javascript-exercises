import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatteningComponent } from './components/flattening/flattening.component';

const routes: Routes = [
  {
    path: 'flattening',
    component: FlatteningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
