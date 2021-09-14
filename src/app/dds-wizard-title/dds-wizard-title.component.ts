import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClrWizardPageTitle } from '@clr/angular';

@Component({
  selector: 'dds-wizard-title',
  templateUrl: './dds-wizard-title.component.html',
  styleUrls: ['./dds-wizard-title.component.scss'],
 })
export class WizardTitleComponent{
  @Input() ddsWizardTitle : string = "";
 }
