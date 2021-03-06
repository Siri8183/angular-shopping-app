import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput",{static: true})  
  nameInputRef: ElementRef;
  @ViewChild("amountInput",{static: true})  
  amountInputRef: ElementRef;

  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(){
   const newIngredient=new Ingredient(this.nameInputRef.nativeElement.value,
              this.amountInputRef.nativeElement.value);

    this.shoppingservice.addIngredient(newIngredient);
  }
}
