import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main.component';
import { TodoformComponent } from './components/todoform.component';
import { CreateComponent } from './components/create.component'; 
import { TodoDetailComponent } from './components/todo-detail.component'; 

import { TodoDatabase } from './todo.database';

const ROUTES = [
  { path:'', component : MainComponent },
  { path:'new', component : CreateComponent },
  { path:'todo/:todoId', component : TodoDetailComponent },
  { path:'**', redirectTo:'/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoformComponent,
    CreateComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, TodoDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
