import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SessionService } from './session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-ui';
  pagedetail:any;
  pages:any[] = [
    {"name":"Jobs","fields":["id","name","location"],"url":"http://localhost:3000/jobs","data":[]},
    {"name":"Employees","fields":["id","name","salary"],"url":"http://localhost:3000/employees","data":[]}
  ];
  constructor(private httpobj:HttpClient,private sessobj:SessionService) {
    this.pagedetail = this.pages[0];
    this.retrieve();
  }

  ngOnInit(): void {
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














