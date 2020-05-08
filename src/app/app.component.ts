import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { rendererTypeName } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  submitStatus: boolean = false;
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
    phone: [, { updateOn: "change" }],
    password: [, { validators: [Validators.required], updateOn: "change" }],
    role: [
      "jobSeeker",
      { validators: [Validators.required], updateOn: "change" },
    ],
  });

  ngOnInit() {
    this.setPhoneValidation();
  }

  setPhoneValidation() {
    const phoneControl = this.registerForm.get("phone");

    phoneControl.setValidators([
      Validators.pattern("^[0-9]*$"),
      Validators.required,
    ]);

    this.registerForm.get("role").valueChanges.subscribe((role) => {
      if (role == "jobSeeker") {
        phoneControl.setValidators([
          Validators.pattern("^[0-9]*$"),
          Validators.required,
        ]);
      } else if (role == "employee") {
        phoneControl.setValidators([Validators.pattern("^[0-9]*$")]);
      }
      phoneControl.updateValueAndValidity();
    });
  }

  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
  }
}
