import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-shopping-app';
  myfeature:string='recipe';

  onNavigate(selectedFeature:string){
    this.myfeature=selectedFeature;
  }
}
