import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hover } from '../../derectives/hover';
import { Afk } from '../../derectives/afk';
import { Repeats } from "../../derectives/repeats";

@Component({
  selector: 'app-models',
  imports: [CommonModule, Hover, Afk, Repeats],
  templateUrl: './models.html',
  styleUrl: './models.css',
})
export class Models {
  kerfurs =[
    {
      name: "Kerfur Blue",
      role: "Classic Helper",
      desc: 'The base model. Cleans stains, fetches hash codes, occasionally gets in the way and violently falls down the stairs.', 
      image: 'assets/blue.png'
    },
    { 
      name: 'Kerfur Pink', 
      role: 'Morale Booster', 
      desc: 'Does exactly the same thing as the blue one, but looks cute doing it. Base personnel highly approved.', 
      image: 'assets/pink.png' 
    },
    { 
      name: 'Omega Kerfur', 
      role: 'Ultimate Guardian', 
      desc: 'Assembled from scrap metal, duct tape, and radio parts. Can actually fight back against the aliens. Good boy.', 
      image: 'assets/omega.webp' 
    }
  ];

}
