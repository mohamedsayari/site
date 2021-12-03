import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
signup( form : any) {
  console.log( form)
}
onChangeEvent(event: any){

  console.log(event.target.value);

}
}
