import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule,RouterModule, RouterLink],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {
  @Input() links: Array<{path:string, label:string, active:string}> = [];
}
