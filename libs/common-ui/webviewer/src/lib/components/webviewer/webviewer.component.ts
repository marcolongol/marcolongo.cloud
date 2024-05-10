import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

@Component({
  selector: 'lib-webviewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webviewer.component.html',
  styleUrls: ['./webviewer.component.scss'],
})
export class WebViewerComponent implements AfterViewInit {
  @ViewChild('viewer')
  viewer!: ElementRef;

  wvInstance!: WebViewerInstance;

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: 'assets/webviewer',
        licenseKey:
          'demo:1713206501243:7f12ce5803000000008ffbc3ee0c80a6513940eee53be3ae6c0c231ec6',
        fullAPI: true,
        initialDoc:
          'https://corsproxy.io/?https://www.fcc.gov/sites/default/files/wireless/auctions/59/resources/Form175Screens.pdf',
      },
      this.viewer.nativeElement,
    ).then((instance: WebViewerInstance) => {
      this.wvInstance = instance;
      this.wvInstance.UI.enableElements([
        'bookmarksPanel',
        'bookmarksPanelButton',
        'outlinesPanel',
      ]);
    });
  }
}
