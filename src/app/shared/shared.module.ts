import { NgModule, ModuleWithProviders }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { TranslateModule } from 'ng2-translate/ng2-translate';

@NgModule({
  imports:      [
		TranslateModule.forRoot(),
  ],
  declarations: [],
  exports:      [ BrowserModule, FormsModule, HttpModule, TranslateModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}