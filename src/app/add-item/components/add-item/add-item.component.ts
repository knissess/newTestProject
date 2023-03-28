import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddItemService } from '../../services/add-item.service';
import { checkedExpressionValidator } from '../../validators/validator';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  constructor(private addItemService: AddItemService, private router: Router) {}
  subscription: Subscription;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        checkedExpressionValidator,
      ]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public submit(): void {
    this.subscription = this.addItemService
      .addItem(this.myForm.value)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
