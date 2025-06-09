// theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  imports: [CommonModule],
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}