import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { withLatestFrom } from 'rxjs';

@Component({
    selector: 'app-with-latest-from',
    templateUrl: './with-latest-from.component.html',
    styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit {
    form: FormGroup;
    field1Values: Array<string> = ['Value 1', 'Value 2', 'Value 3'];
    field2Values: Array<string> = ['Value 1', 'Value 2', 'Value 3'];
    pingCount = 0;
    isAnimating = false;
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
        this.initFormChanges();
    }

    initForm(): void {
        this.form = this.fb.group({
            field1: [''],
            field2: [''],
        });
    }

    initFormChanges(): void {
        this.form
            .get('field2')
            ?.valueChanges.pipe(
                withLatestFrom(this.form.controls['field1']?.valueChanges)
            )
            .subscribe({
                next: ([field1, field2]) => {
                    this.pingCount++;
                    this.isAnimating = true;
                    setTimeout(() => (this.isAnimating = false), 200);
                },
            });
    }
}
