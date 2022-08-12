import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public formGroup: FormGroup | undefined;
  public showPaymentCard = false;

  constructor(private fb: FormBuilder,private toastr: ToastrService) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }

  ngOnInit(): void {
  }

  validateCredentials() {
    if (this.formGroup?.valid) {
      this.showPaymentCard = true;
    } else {

      this.toastr.error("Enter valid Email and Phone number.")

    }
  }

}
