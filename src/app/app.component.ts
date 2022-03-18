import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public store: StoreService,
    private apiService: ApiService,
  ) {}

  loading: boolean = false;

  ngOnInit() {
    // this.loading = true;

    this.apiService.getList();
    // .subscribe(() => {
    //   this.loading = false;
    // });
  }
}
