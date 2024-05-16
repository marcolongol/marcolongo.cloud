import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sqli',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './sqli.component.html',
  styleUrl: './sqli.component.scss',
})
export class SqliComponent {}
