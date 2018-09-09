import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from './to-do/to-do.service';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
