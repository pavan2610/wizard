import { Component, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  wizardButtonsList = ["cancel","next","finish"];
  stepTwo: boolean = true;
  stepThree: boolean = true;
  _open: boolean = false;

  open() {
      this._open = !this.open;
  }

  doCustomClick(buttonType: string): void {
    if (buttonType === 'custom-next') {
      console.log('yes')
      this.stepTwo = true;
      this.stepThree = false;
    } else {
      console.log('no')
      this.stepTwo = false;
      this.stepThree = true;
    }
    setTimeout(() => {
      
    });
  }
}
