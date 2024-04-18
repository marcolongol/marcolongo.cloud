import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  Output,
} from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-webviewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webviewer.component.html',
  styleUrl: './webviewer.component.scss',
})
export class WebViewerComponent implements OnInit, AfterViewInit {
  wvInstance?: WebViewerInstance;

  @ViewChild('viewer', {
    static: true,
  })
  viewer!: ElementRef;

  @Output() coreControlsEvent: EventEmitter<string>;

  private documentLoaded$: Subject<void>;

  constructor() {
    this.coreControlsEvent = new EventEmitter<string>();
    this.documentLoaded$ = new Subject<void>();
  }

  ngOnInit(): void {
    console.log('🚀 ~ PdfEditorComponent ~ ngOnInit ~ ngOnInit:', 'ngOnInit');
  }

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: 'assets/webviewer',
        licenseKey:
          'demo:1713206501243:7f12ce5803000000008ffbc3ee0c80a6513940eee53be3ae6c0c231ec6',
        initialDoc:
          'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
      },
      this.viewer.nativeElement,
    ).then((instance: WebViewerInstance) => {
      this.wvInstance = instance;
      this.documentLoaded$.next();
    });
  }
}
