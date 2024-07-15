import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CalViewComponent } from './app/cal-view/cal-view.component';

function waitForElement(selector: any, callback: any) {
  const intervalId = setInterval(() => {
    if (document.querySelector(selector)) {
      clearInterval(intervalId);
      callback();
    }
  }, 500);
}

waitForElement('app-cal-view', () => {
  bootstrapApplication(CalViewComponent);
});
