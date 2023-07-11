import { Component, Input, ContentChild, ElementRef, type AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterContentInit {
  @Input()
  title!: string;

  @ContentChild('content')
  content!: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.content.nativeElement.innerText);
  }
}