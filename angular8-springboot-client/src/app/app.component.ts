import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // <--- 1. Ajoutez les imports ici

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
})
export class AppComponent {
  title = 'Accounts Manager';
}