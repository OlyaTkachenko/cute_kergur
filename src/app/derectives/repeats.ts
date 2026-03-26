import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeats]',
})
export class Repeats {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  @Input() set appRepeats(count: number) {
    this.viewContainer.clear();

    for(let i=0; i<count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
