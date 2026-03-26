import { Directive, TemplateRef, ViewContainerRef, inject, effect} from '@angular/core';
import { Signal } from '../signal';

@Directive({
  selector: '[appAfk]',
  standalone: true
})
export class Afk {
    private status = inject(Signal);
  private afkElement: HTMLElement | null = null;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    effect(() => {
    this.viewContainer.clear();

    if(this.status.isOnline()){
      if (this.afkElement) {
          this.afkElement.remove();
          this.afkElement = null;
        }
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.afkElement = document.createElement('div');
        this.afkElement.innerHTML = `
          <div style="height: 84vh; display: flex; align-items: center; justify-content: center; background: #111; text-shadow: 
            0 0 5px #f90f0f,
            0 0 15px #ff6666,
            0 0 30px #ff0000;  color: #ffffff; font-family: 'Lucida Sans';">
            <h1>[ SIGNAL LOST. KERFUR OFFLINE ]</h1>
          </div>
        `;
        this.viewContainer.element.nativeElement.parentElement.appendChild(this.afkElement); 
    }});
  }

  
} 
