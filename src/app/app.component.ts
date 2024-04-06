import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  studentDetails : any[] = [
    {
      Name:"Dhileep Kumar",
      age:18
    },
    {
      Name:"Kumar",
      age:21
    },
    {
      Name:"tharun",
      age:15
    }
  ]

  getDetails(Age:any){
    let val = Age < 18 ? "under18" : "above18";

    switch(val){
      case "under18":
        return "red";
      case "above18":
        return "green";
    }
    return "";
  }

  getclasstype(input:any){

    let classtype;
    if (input == "main"){
      classtype =  {
        "color1":true
      }

    }
    else{
      classtype = {
        "color2":true
      }
    }
    return classtype;

  }
}
