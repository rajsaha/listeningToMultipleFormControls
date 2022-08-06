import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form = this.fb.group({
            correctSolution: [true],
        });
    }

    getFormValue(control: string): boolean {
        return this.form?.get(control)?.value;
    }
}
