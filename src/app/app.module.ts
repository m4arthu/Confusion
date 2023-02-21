import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout' /** this module meke abble the angular to  organize the layout**/
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatProgressSpinnerModule} from  '@angular/material/progress-spinner'
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
import { baseURL } from './shared/baseurl'
// services imports
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';

// components imports 
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LeadersService } from './services/leaders.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeadersService,
    { provide: 'baseURL', useValue: baseURL}
  ],
  entryComponents: [
    LoginComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
