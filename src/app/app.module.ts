import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './interceptor/http-interceptor'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalComponent } from './components/modal/modal.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
