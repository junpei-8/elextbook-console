import { Attribute, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'a[hp-link]',
  host: {
    class: 'hp-link',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
})
export class HomeLinkDirective implements OnInit {
  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    @Attribute('href') private _href: string,
  ) {
  }

  ngOnInit(): void {
    this._elementRef.nativeElement.insertAdjacentHTML('beforeend', '<span class="hp-href">'+ this._href +'</span>')
  }
}

