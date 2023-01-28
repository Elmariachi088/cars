import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cars-dialog',
  templateUrl: './cars-dialog.component.html',
  styleUrls: ['./cars-dialog.component.scss']
})
export class CarsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CarsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    data.img_path = "assets/images/" + data.img_path;

   }

}
