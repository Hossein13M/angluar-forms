import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule, MatCardModule } from "@angular/material";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
