import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-sqli',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './sqli.component.html',
  styleUrl: './sqli.component.scss',
})
export class SqliComponent implements OnInit {
  private http = inject(HttpClient);
  ngOnInit(): void {
    this.http.get('/api').subscribe((data) => {
      console.log(data);
    });
  }
}
