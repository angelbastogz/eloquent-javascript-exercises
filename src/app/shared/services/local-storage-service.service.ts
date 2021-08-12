import { Injectable } from '@angular/core';

const THEME_KEY = 'theme';
const DARK_THEME_KEY = 'dark-theme';
const LIGHT_THEME_KEY = 'light-theme';

type Theme = 'dark-theme' | 'light-theme';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() {
    console.log(this.getTheme());
    if (!this.getTheme()) {
      this.setTheme(LIGHT_THEME_KEY);
    }
  }

  setTheme(value: Theme): void {
    this.setLocalStorage(THEME_KEY, value);
  }

  setDarkTheme(): void {
    this.setTheme(DARK_THEME_KEY);
  }

  setLightTheme(): void {
    this.setTheme(LIGHT_THEME_KEY);
  }

  getTheme(): Theme {
    return this.getLocalStorage(THEME_KEY);
  }

  isDarkTheme(): boolean {
    return this.getTheme() === DARK_THEME_KEY;
  }

  private getLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  private setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
