import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../User';
import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: User = new User();
  selectedLanguages: string[] = [];
  

  constructor(private adduserservice:AdduserService){}
  ngOnInit(): void {
    // this.adduserservice.deleteAll().subscribe(data =>{
    //   console.log(data);
    // })
  }

  submitForm(form: NgForm){
    if(form.valid){
      this.user.languages = this.selectedLanguages;
     
      this.adduserservice.addUser(this.user).subscribe( (data:any) =>{
          alert(data)
      },
      error => {
        console.error('Error adding user:', error.message);
        
      }
        )
    }
    else if(form.invalid){
      console.log("invalid")
    }
  }

  onLanguageChange(event:any,language:string){
    if (event.checked) {
      this.selectedLanguages.push(language); // Add language to selected languages array
    } else {
      // Remove language from selected languages array if unchecked
      const index = this.selectedLanguages.indexOf(language);
      if (index != -1) {
        this.selectedLanguages.splice(index, 1);
      }
    }
  }
}
