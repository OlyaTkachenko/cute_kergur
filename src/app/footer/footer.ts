import { Component, inject } from '@angular/core';
import { Signal } from '../signal';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public status = inject(Signal);
}
