import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../User';
import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'country', 'gender','languages',"actions"];
  dataSource!: MatTableDataSource<User>;

  constructor(private getuser:AdduserService){}

  ngOnInit(): void {

    this.getuser.getuser().subscribe( data =>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    })
    
  }

  editUser(user:any){
    user.name = "gentle_bloody";

    this.getuser.updateUser(user).subscribe( data => {
      alert(data);
    })

  }
  deleteUser(user:any){

    this.getuser.deleteUser(user.id).subscribe( data => {
      alert(data);
    })

  }


}
