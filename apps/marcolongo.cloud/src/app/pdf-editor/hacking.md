# PDF Editor Spike

## TOC

- [PDF Editor Spike](#pdf-editor-spike)
  - [TOC](#toc)
  - [Approach](#approach)
  - [Results](#results)
    - [PDF.js](#pdfjs)
    - [PDFTron](#pdftron)
    - [PDF.js Express](#pdfjs-express)
    - [Kendo UI PDF Viewer](#kendo-ui-pdf-viewer)
  - [Conclusion](#conclusion)

## Approach

- Investigate Web-browser based PDF editors that allow you view and edit a PDF via a URI endpoint (over WebDav, over SFTP, etc) and can be feature restricted to allow adding/editing bookmarks to PDF, but NOT allow editing the contents.

- Buy/use or integrate an extensible/programmable web-browser based PDF viewer that lets us select arbitrary text (and/or images ?) and then extend a right mouse menu, a menu/header button, a floating button that the user could click to start a "Add New Bookmark" sequence which calls a web service call to programmatically edit the PDF directly on the backend while we are viewing it.

## Results

---

### [PDF.js](https://mozilla.github.io/pdf.js/)

- **Evaluation**: PDF.js is a open source JavaScript library that allows you to parse and render PDF files in a web browser. It provides a rich set of APIs to manipulate PDFs, but it doesn't seem to support bookmarks/annotations. The viewer could be customized to add the capability of adding bookmarks and restrict editing capabilities to only adding bookmarks. The project is backed by Mozilla and is actively maintained.

- **Pros**:

  - Open source project.
  - Provides a limited set of APIs to manipulate PDFs.
  - Can be customized to restrict editing capabilities to only adding bookmarks.
  - Actively maintained.

- **Cons**:

  - Doesn't seem to support bookmarks/annotations out of the box.
  - May require a lot of customizations to add the capability of adding bookmarks.
  - May require a lot of customization to restrict editing capabilities to only adding bookmarks.

- **Resources**:
  - [PDF.js](https://mozilla.github.io/pdf.js/)
  - [PDF.js API](https://mozilla.github.io/pdf.js/api/)
  - Currently there is no available Live Demo for this tool. It can be tested by installing the chrome extension [PDF Viewer](https://chromewebstore.google.com/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm?pli=1) and opening a PDF file or by using Firefox browser.

---

### [PDFTron](https://www.pdftron.com/)

- **Evaluation**: PDFTron is a commercial PDF SDK that provides a web-based PDF viewer/editor that can be embedded in a web application. It provides a rich set of APIs to manipulate PDFs, including adding bookmarks. The viewer/editor can be customized to restrict editing capabilities to only adding bookmarks.

- **Pros**:

  - Provides a rich set of APIs to manipulate PDFs.
  - Can be customized to restrict editing capabilities to only adding bookmarks.
  - Supports multiple platforms (Web, iOS, Android, Windows, Linux, macOS).
  - Provides a free trial.

- **Cons**:

  - Commercial product, so it may be expensive.
  - May require a lot of customization to restrict editing capabilities to only adding bookmarks // It's not entirely clear from the documentation how to restrict editing capabilities to only adding bookmarks.

- **Resources**:
  - [WebViewer](https://www.pdftron.com/webviewer/)
  - [WebViewer API](https://www.pdftron.com/documentation/web/guides/ui/apis)
  - [WebViewer API: Bookmarks](https://showcase.apryse.com/annotation-permissions)
  - [Demo](https://showcase.apryse.com/)

---

### [PDF.js Express](https://pdfjs.express/)

- **Evaluation**: PDF.js Express is a commercial PDF SDK that provides a web-based PDF viewer/editor that can be embedded in a web application. It provides a rich set of APIs to manipulate PDFs, including adding bookmarks. The viewer/editor provides a client side user permission system that can be used to restrict editing capabilities to only adding bookmarks.

- **Pros**:

  - Provides a rich set of APIs to manipulate PDFs.
  - Can be customized to restrict editing capabilities to only adding bookmarks.
  - Supports multiple platforms (Web, iOS, Android, Windows, Linux, macOS).
  - Provides a free trial.
  - Supports [Angular](https://pdfjs.express/documentation/get-started/angular/new-project), [React](https://pdfjs.express/documentation/get-started/react), and [Vue](https://pdfjs.express/documentation/get-started/vue/).

- **Cons**:

  - Commercial product. [Pricing](https://pdfjs.express/pricing/).

- **Resources**:
  - [PDF.js Express](https://pdfjs.express/)
  - [PDF.js Express API](https://pdfjs.express/documentation/)
  - [PDF.js Express Demo](https://pdfjs.express/demo/)

---

### [Kendo UI PDF Viewer](https://www.telerik.com/kendo-ui/pdfviewer)

- **Evaluation**: Kendo UI PDF Viewer is a commercial PDF viewer that can be embedded in a web application. It only provides viewing capabilities and does not support editing PDFs. It does not support bookmarks/annotations.

---

## Conclusion

- PDF.js is an open source project that can be customized to add the capability of adding bookmarks and restrict editing capabilities to only adding bookmarks. However, it may require a lot of customizations. The bookmarks/annotations functionality could possibly be added by extending the viewer and adding a custom UI to allow users to add bookmarks. The custom UI would then call a web service to programmatically edit the PDF directly on the backend to add the XFDF annotations/bookmarks.

- PDFTron and PDF.js Express are commercial products that provide a rich set of APIs to manipulate PDFs, including adding bookmarks. They can be customized to restrict editing capabilities to only adding bookmarks. They also provide a free trial. PDF.js Express provides a client side user permission system that can be used to restrict editing capabilities to only adding bookmarks and seems to be more cheaper and user friendly than PDFTron.

- Kendo UI PDF Viewer is a commercial PDF viewer that only provides viewing capabilities and does not support editing PDFs. It does not seem to support bookmarks/annotations.
