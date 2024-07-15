import { CommonModule } from '@angular/common';
import { Component, ElementRef, Injector, Input } from '@angular/core';
import { CalEntryComponent } from '../cal-entry/cal-entry.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-cal-view',
  standalone: true,
  imports: [CommonModule, CalEntryComponent],
  template: `

  <h3>{{mainTitle }}</h3>

  <ng-container *ngFor="let entry of data">
    <app-cal-entry [title]="entry.title"> </app-cal-entry>
  </ng-container>

  `,
  styles: ``,
})
export class CalViewComponent {
  data = [
    { title: 'Gottesdienst' },
    { title: 'Gebetsstunde' },
    { title: 'Bibelstunde' },
  ];

  @Input() mainTitle: string = 'Termine';

  constructor(private elementRef: ElementRef) {
    this.mainTitle = this.elementRef.nativeElement.getAttribute('mainTitle');
  }
}
