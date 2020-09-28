import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-detail',
  templateUrl: './logo-detail.component.html',
  styleUrls: ['./logo-detail.component.sass']
})
export class LogoDetailComponent implements OnInit {
  isLoadingTwo = false
  constructor() { }

  ngOnInit() {
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

}
