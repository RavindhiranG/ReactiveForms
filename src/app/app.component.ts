import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{  //implements OnInit: Indicates that the class implements the OnInit interface, which requires the implementation of the ngOnInit lifecycle hook method.
    // Reactive forms in Angular revolve around two key classes: FormGroup and FormControl. A FormGroup represents a collection of form controls, and a FormControl represents an individual form control, such as an input field.

  title = 'ReactiveForms';

  loginForm!: FormGroup;  //Declares a property loginForm of type FormGroup. The '!' operator is used to tell TypeScript that this property will be initialized later, in the ngOnInit method.

  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });
  }

    // ngOnInit(): Lifecycle hook method called after Angular has initialized all data-bound properties of a directive.
    //  In this method, the loginForm property is initialized with a new instance of FormGroup, containing two form controls: email and password, both initialized with empty string values.

  onSubmit() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    alert(`Email: ${email}, Password: ${password}`);
  }

    // In this modified onSubmit() method:

    // this.loginForm.get('email')?.value: Retrieves the value of the email form control.
    // this.loginForm.get('password')?.value: Retrieves the value of the password form control.
    // These values are then used to construct the alert message, which will display the typed email and password when the form is submitted.

// Another Way to achieve the same

// loginForm: FormGroup = new FormGroup({ // Initialize loginForm here

//   email: new FormControl(''),
//   password: new FormControl('')
// });

// ngOnInit(): void {

// }

// onSubmit() {
//   alert("done");
// }

}


