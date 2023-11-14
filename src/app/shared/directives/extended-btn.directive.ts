import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appExtendedBtn]',
  standalone: true
})
export class ExtendedBtnDirective {
  @Input() isDisabled!: boolean;

  constructor() { }

  @HostListener('click', ['$event'])
  onClick() {
    console.log(`Say Hello!\nRight now yore user status ${this.isDisabled ? `don't give you chance to adding new chart` : `...never minde`}`)
  }

}
