import { Component, OnInit } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster-alert',
  templateUrl: './toaster-alert.component.html',
  styleUrls: ['./toaster-alert.component.scss'],
})
export class ToasterAlertComponent extends Toast {
  alertMessage :any= '';
  positionClass :any = 'toast-bottom-full-width';
  toastType = '';
  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage
  ) {
    super(toastrService, toastPackage);
  }

  ngOnInit(): void {
    this.alertMessage = this.toastPackage.message;
    this.positionClass = this.toastPackage.config.positionClass;
    this.toastType = this.toastPackage.toastType;
  }
}
