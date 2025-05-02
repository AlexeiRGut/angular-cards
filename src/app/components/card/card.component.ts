import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent implements OnChanges, AfterViewInit {
  @ViewChild('card') card!: ElementRef;
  @ViewChild('status') status!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    let statusText = this.status.nativeElement.innerText;
    let colour = this.setCardColour(statusText);

    this.renderer.setStyle(this.card.nativeElement, 'border-color', colour);
    this.renderer.setStyle(this.status.nativeElement, 'color', colour);
  }

  ngOnChanges() {
    // let card = document.querySelector('.card') as HTMLDivElement;
    // let status = card.querySelector('.status') as HTMLSpanElement;
    // let colour = this.setCardColour(status.innerText);
    // this.renderer.setStyle(card, 'borderColor', colour);
    // this.renderer.setStyle(status, 'color', colour);
  }

  setCardColour(status: string) {
    let colour = '';

    switch (status) {
      case 'Approved':
        colour = 'green';
        break;
      case 'Cancelled':
        colour = 'gray';
        break;
      case 'Pending':
        colour = 'orange';
        break;
      case 'Submitted':
        colour = 'blue';
        break;
      case 'To be submitted':
        colour = 'purple';
        break;
      case 'Rejected':
        colour = 'red';
        break;
    }

    return colour;
  }
}
