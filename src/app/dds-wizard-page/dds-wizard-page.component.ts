import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'dds-wizard-page',
  templateUrl: './dds-wizard-page.component.html',
  styleUrls: ['./dds-wizard-page.component.scss'],
 })
export class WizardPageComponent{
  @Input() ddsPageNavTitle: string = "";
  @Input() ddsPageTitle: string = "";
 }
