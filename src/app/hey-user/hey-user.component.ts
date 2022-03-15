import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hey-user',
  templateUrl: './hey-user.component.html',
  styleUrls: ['./hey-user.component.css']
})
export class HeyUserComponent implements OnInit {
  count = 0
  helloMsg = new Promise((res,reject)=>{
    setTimeout(()=>{
      res("hey user!");
    }, 3000)
  })

  constructor() { }

  ngOnInit(): void {
    let time = setInterval(()=>{
      this.count++;
    }, 1000)
  }
}
