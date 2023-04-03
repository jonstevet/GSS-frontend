import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// Material components
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


// Custom components
import { RentstatusComponent } from './pages/rentstatus/rentstatus.component';
import { RentstatustableComponent } from './pages/rentstatustable/rentstatustable.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RentstatusComponent,
    RentstatustableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
