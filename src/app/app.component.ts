import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
// import { DashboardComponent } from './pages/dashboard/dashboard.componen';
import { LoginComponent } from "./pages/login/login.component";
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ROOT',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
