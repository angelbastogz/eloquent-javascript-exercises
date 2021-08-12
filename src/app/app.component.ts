import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { LocalStorageServiceService } from './shared/services/local-storage-service.service';
import { ThemeColor } from './shared/types/ThemeColor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark = false;
  themeColor: ThemeColor = 'primary';
  title = 'eloquent-javascript';

  constructor(
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageServiceService
  ) {
    this.isDark = localStorageService.isDarkTheme();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.localStorageService.setDarkTheme();
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
      this.localStorageService.setLightTheme();
    }
  }
}
