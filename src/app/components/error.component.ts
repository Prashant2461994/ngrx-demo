import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  template: ` <div
    fxLayout="column"
    fxLayoutAlign="center center"
    fxLayoutGap="30px"
  >
    <mat-icon>error_outline</mat-icon>
    <span>{{ errorTitle || 'Error Occured!' }}</span>
    <button mat-raised-button color="warn" (click)="this.reload.next()">
      Try Again
    </button>
  </div>`,
})
export class ErrorComponent {
  @Output('reload') reload = new EventEmitter();
  @Input('error-title') errorTitle: any;

  constructor() {}
}
