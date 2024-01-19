import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fields } from 'src/app/models/Fields.model';
import { jsonData } from 'src/assets/json-data';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{

  formData: any = {};

  form!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.formData = jsonData;
    console.log('json data', this.formData.formFields);
    this.form = this.createFormGroup(this.formData.formFields);
  }

  createFormGroup(fields: Fields[]): FormGroup {
    const group: any = {};

    fields.forEach(fieldGroup => {
      fieldGroup.fields.forEach((field: Fields) => {
        const validators = [];
        if (field.validations && field.validations.isRequired) {
          validators.push(Validators.required);
        }
        if (field.validations && field.validations.pattern) {
          validators.push(Validators.pattern(field.validations.pattern));
        }

        group[field.name] = this.fb.control('', validators);

      });
    });

    return this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.route.navigate(['/form-submission']);
    } else {
      console.log('error');
    }
  }

}
