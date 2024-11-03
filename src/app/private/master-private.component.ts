import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthService } from "../services/auth.service";






@Component({
    selector: 'app-private',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './master-private.component.html',
    styleUrl: './master-private.component.css'
    
  })
  export class MasterPrivateComponent { 

    constructor(private authService: AuthService) {}

    ngOnInit() {

    }

    logout() {
      this.authService.logout();
    }
  }