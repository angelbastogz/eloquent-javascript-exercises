import { Component, Input } from '@angular/core';
import { ThemeColor } from '../../types/ThemeColor';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() themeColor: ThemeColor = 'primary';

  constructor() { }
}
