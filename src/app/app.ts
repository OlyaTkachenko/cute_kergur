import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from './main-menu/main-menu';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, MainMenu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('voices');
  links = [
    {path: '/main', label: 'Main', active :"button-active"},
    {path: '/models', label: 'Models' , active :"button-active"},
    {path: '/info', label: 'Information', active :"button-active"}
  ];
}
