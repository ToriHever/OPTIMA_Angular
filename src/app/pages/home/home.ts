import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { BrandsCarousel } from '../../components/brands-carousel/brands-carousel';
import { Categories } from '../../components/categories/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    BrandsCarousel,
    Categories
],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}