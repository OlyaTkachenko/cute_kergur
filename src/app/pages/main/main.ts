import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Afk } from '../../derectives/afk';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterLink, Afk],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
