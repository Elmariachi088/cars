import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarsDialogComponent } from '../cars-dialog/cars-dialog.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {   
  arr = [
    {title: "Mersedes", article: "Lorem ipsum", img_path: "1.jpeg"  },
    {title: "BMW", article: "Lorem ipsum", img_path: "2.jpg"  },
    {title: "Volkswagen", article: "Lorem ipsum", img_path: "3.jpg"  },
    {title: "Audi", article: "Lorem ipsum", img_path: "4.jpg"  }
  ];
  constructor(public dialog: MatDialog) {
  }
  
  openDialog(i: number){
    console.log(this.arr[i]);

    let dialogRef = this.dialog.open(CarsDialogComponent, {
      height: '400px',
      width: '600px',
      data: this.arr[i]
    });

  }



}




