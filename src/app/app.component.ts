import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup = this.formBuilder.group({
    fullName: [, { validators: [Validators.required], updateOn: "change" }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: "change",
      },
    ],
    password: [, { validators: [Validators.required], updateOn: "change" }],
    role: [
      "jobSeeker",
      { validators: [Validators.required], updateOn: "change" },
    ],
    phone: [
      ,
      {
        validators: [Validators.pattern("^[0-9]*$")],
        updateOn: "change",
      },
    ],
  });

  ngOnInit() {}
}
