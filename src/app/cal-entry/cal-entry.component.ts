import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cal-entry',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="parent">
    <img src={{imageSrc}} class="placeholder-image" alt="Beschreibung des Bildes">
    <div> 
    <h3>{{title}}</h3>
    Lorem ipsum dolor sit {{date | date  }}, consetetur {{time | date:'shortTime' }} elitr sed!</div>
  `,
  styles: ``,
})
export class CalEntryComponent {
  @Input() title: string = '';

  @Input() imageSrc =
    'https://images.pexels.com/photos/25241793/pexels-photo-25241793/free-photo-of-landschaft-nacht-milchstrasse-sterne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  @Input() date = new Date();
  @Input() time = this.date.getTime();
}
