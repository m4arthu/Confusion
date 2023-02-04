import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leaders.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

dish: Dish
promotion: Promotion
leader: Leader
constructor(private DishService: DishService, private PromotionService: PromotionService, private LeaderService: LeadersService) {}  
ngOnInit(){
   this.DishService.getFeaturedDish()
   .then((Dish) => {
    this.dish = Dish 
   })
  this.PromotionService.getFeaturedPromotion()
  .then((Promotion) => {
    this.promotion = Promotion
  })
  this.LeaderService.getFeaturedLeader()
  .then((Leader) => {
    this.leader = Leader
  })
}
}
