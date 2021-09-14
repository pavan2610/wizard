import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClrWizard, ClrWizardPageButtons } from '@clr/angular';


@Component({
  selector: 'dds-wizard',
  templateUrl: './dds-wizard.component.html',
  styleUrls: ['./dds-wizard.component.scss'],
  providers:[],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent{
  @ViewChild('wizard') wizard: ClrWizard;
  @Input() ddsWizardClosable: boolean = true;
  stepTwo: boolean = true
  stepThree: boolean = true;
  _open: boolean = false;

  constructor() { }
  
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
