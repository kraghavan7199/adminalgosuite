import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthState } from "../../store/state";
import { selectUserProfile } from "../../store/selectors";
import { DataService } from "src/app/services/data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  providers: [DataService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userCount!: number;
  stringCount!: number;
  treeCount!: number;
  users: any = [];
  skip = 0;
  limit = 15;
  showLoadMore = true;

  name!: string;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getAdminData();
    this.getAllUsers()
  }


  getAdminData() {
    this.dataService.getAdminData().subscribe((res: any) => {
      if (res) {
        this.userCount = res.userCount;
        this.stringCount = res.stringsCount;
        this.treeCount = res.treesCount;

      }
    })
  }

  changeUserStatus(isBlocked: boolean, id: number) {
    this.dataService.changeUserBlockStatus({ userId: id, isBlocked }).subscribe(res => {
      if (res) {
        this.users = [];
        this.getAllUsers();
      }
    })
  }

  getAllUsers() {
    this.dataService.getAllUsers({ skip: this.skip, limit: this.limit }).subscribe((res: any) => {
      this.showLoadMore = res.length === this.limit;
      this.users = this.users.concat(JSON.parse(JSON.stringify(res)));
    })

  }

  loadMore() {
    this.skip += this.limit;
    this.getAllUsers();
  }

}