import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query = '';
  response = '';

  send(): void {
    if (!this.query.trim()) return;
    this.response = `You asked: "${this.query.trim()}". Generating AWS-related content...`;
    this.query = '';
  }
}
