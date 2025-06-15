import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
// import { DashboardComponent } from './pages/dashboard/dashboard.componen';
import { LoginComponent } from "./shared/components/login/login.component";
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ROOT',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {

}
