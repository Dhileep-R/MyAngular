import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-stand',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.css']
})
export class StandComponent {

    items: string[] = ["value1","value2"]
}
