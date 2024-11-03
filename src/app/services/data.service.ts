import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environment";




@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getAdminData() {
        return this.http.get(this.apiUrl + '/admin/data')
    }

    getAllUsers(payload: any) {
        return this.http.get(this.apiUrl + `/admin/users?criteria=${JSON.stringify(payload)}`)
    }

    changeUserBlockStatus(payload: any) {
        return this.http.post(this.apiUrl + `/admin/users/block-status`, payload);
    }
  }