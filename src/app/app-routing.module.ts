import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormSubmissionComponent } from './components/form-submission/form-submission.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-form', pathMatch: 'full' },
  { path: 'empoyee-form', component: DynamicFormComponent },
  { path: 'form-submission', component: FormSubmissionComponent },
  { path: '**', component: DynamicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
