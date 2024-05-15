import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public githubUser = input('marcolongol');
  public facebookUser = input('LMarcolong');
  public instagramUser = input('m4rcolongo');
  public linkedinUser = input('lucas-marcolongo');
}
