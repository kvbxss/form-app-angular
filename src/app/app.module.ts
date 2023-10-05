import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyInputDirective } from './directives/input.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import en from './en';

@NgModule({
  declarations: [
    AppComponent, MyInputDirective, FormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(t: TranslateService){
    t.setTranslation('en', en);
    t.use('en');
  }
 }
