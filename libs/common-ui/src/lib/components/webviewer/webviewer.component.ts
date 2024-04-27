import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnDestroy,
} from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { BehaviorSubject, Subject, delay, takeUntil, tap } from 'rxjs';

// TODO: CORS proxy is a workaround for the WebDav server not supporting CORS
const BASE_URL = `https://corsproxy.io/?${encodeURIComponent('https://u396144.your-storagebox.de')}`;
const USERNAME = 'u396144';
const PASSWORD = 'HYqbjPFcsvRePJ7s';
const TOKEN = btoa(`${USERNAME}:${PASSWORD}`);

@Component({
  selector: 'lib-webviewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webviewer.component.html',
  styleUrl: './webviewer.component.scss',
})
export class WebViewerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('viewer', {
    static: true,
  })
  viewer!: ElementRef;

  wvInstance?: WebViewerInstance;

  #documentLoaded$: Subject<void>;

  #file$: BehaviorSubject<string>;

  #ngUnsubscribe$ = new Subject<void>();

  constructor() {
    this.#documentLoaded$ = new Subject<void>();
    this.#file$ = new BehaviorSubject<string>('');
    // SECTION: Subscribe to file changes
    // eslint-disable-next-line rxjs-angular/prefer-async-pipe, rxjs-angular/prefer-composition
    this.#file$
      .pipe(
        delay(1000), // ! This is a workaround for the WebViewer not being ready when the file is set
        // TODO: Add a loading spinner and handle the loading state properly
        tap((file) => {
          console.log('🚀 ~ WebViewerComponent ~ tap ~ fileUrl:', file);
          if (this.wvInstance) {
            const fileUrl = `${BASE_URL}/${file}.pdf`;
            this.wvInstance.UI.loadDocument(fileUrl, {
              customHeaders: {
                // TODO: We will need to handle user authentication towards WebDav
                Authorization: `Basic ${TOKEN}`,
              },
            });
          }
        }),
        takeUntil(this.#ngUnsubscribe$),
      )
      // eslint-disable-next-line rxjs-angular/prefer-async-pipe, rxjs-angular/prefer-composition, rxjs-angular/prefer-takeuntil
      .subscribe();
  }

  @Input() set file(value: string) {
    this.#file$.next(value);
    console.log('🚀 ~ WebViewerComponent ~ @Input ~ value:', value);
  }

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: 'assets/webviewer',
        licenseKey:
          'demo:1713206501243:7f12ce5803000000008ffbc3ee0c80a6513940eee53be3ae6c0c231ec6',
        fullAPI: true,
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

  ngOnDestroy(): void {
    this.#ngUnsubscribe$.next();
    this.#ngUnsubscribe$.complete();
  }
}
