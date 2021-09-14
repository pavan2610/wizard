import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './dds-wizard/dds-wizard.component';
import { WizardTitleComponent } from './dds-wizard-title/dds-wizard-title.component';
import { WizardButtonComponent } from './dds-wizard-button/dds-wizard-button.component';
import { WizardNavigationService } from '@clr/angular/wizard/providers/wizard-navigation.service';
import { WizardPageComponent } from './dds-wizard-page/dds-wizard-page.component';



@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardTitleComponent,
    WizardButtonComponent,
    WizardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
