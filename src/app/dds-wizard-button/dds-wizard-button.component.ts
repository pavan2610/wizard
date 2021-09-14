import { Component, Input, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';
import { WizardNavigationService } from '@clr/angular/wizard/providers/wizard-navigation.service';

@Component({
  selector: 'dds-wizard-button',
  templateUrl: './dds-wizard-button.component.html',
  styleUrls: ['./dds-wizard-button.component.scss'],
  providers:  []
 }) 
export class WizardButtonComponent{
  @Input() ddsWizardButtonType: string = "";
  @Input() ddsWizardButtonText: string = "";
  
  constructor() {
    
  }
 }
