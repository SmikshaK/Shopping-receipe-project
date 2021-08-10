import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit 
{  
  recipes: Recipe[] = [
  new Recipe('A test recipe', 'This is simply a test', 'https://www.thespruceeats.com/thmb/Y444Z8OGcofBJJ7MLFCrwDjcMEI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-and-easy-chocolate-cake-recipe-995137-hero-01-e361ee51a67d4c12afb451cc48fb1940.jpg)')  
];

  constructor() { }

  ngOnInit(): void {
  }

}
