import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  config:any;
  pagedetail:any;
  pages:any[];

  constructor(private httpobj:HttpClient) {
    this.httpobj.get('/assets/appConfig.json').subscribe(response => {
      this.config = response as string;
      this.pages = this.config.pages;
      this.pagedetail = this.pages[0];
      this.retrieve();
    });
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem("auto-ui-user");
    window.location.reload();
  }

  navigate(index:number)
  {
    this.pagedetail = this.pages[index];
    this.retrieve();
  }

  retrieve()
  {
    this.httpobj.get(this.pagedetail.url).subscribe(response => {
      this.pagedetail.data = response as string[];
    })
  }
}
