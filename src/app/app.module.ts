import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MyInputDirective } from './directives/input.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import en from './en';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent, MyInputDirective, FormFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(t: TranslateService){
    t.setTranslation('en', en);
    t.use('en');
  }
 }
