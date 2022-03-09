import { YoutubeRepository } from './../services/youtube-repository';
import { User } from './../models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface Data {
  username: string;
  email: string;
}
@Component({
  selector: 'update-user',
  template: `<form
    [formGroup]="this.form"
    (ngSubmit)="this.form.valid && this.update()"
  >
    <div fxLayout="row" fxLayoutAlign="center stretch" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput placeholder="email" formControlName="email" />
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="username" formControlName="username" />
      </mat-form-field>
      <div fxLayout="column" fxLayoutGap="10px">
        <button
          mat-raised-button
          color="warn"
          style="margin:10px;"
          type="submit"
        >
          Update
        </button>
        <button mat-raised-button color="warn" (click)="this.dialogRef.close()">
          Close
        </button>
      </div>
    </div>
  </form> `,
})
export class UpdateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private youtubeRepo: YoutubeRepository
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.data.name, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required]),
    });
  }

  update() {
    console.log('user update request initiated');
    const updatedUser = { ...this.data, ...this.form.value };
    console.log(JSON.stringify(updatedUser));
    this.youtubeRepo.updateUser(updatedUser);
    this.dialogRef.close();
  }
}
