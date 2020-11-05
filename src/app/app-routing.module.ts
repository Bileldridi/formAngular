import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Rooting/form/form.component';
import { TableComponent } from './Rooting/table/table.component';
import { FormEditComponent } from './Rooting/form-edit/form-edit.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';


const routes: Routes = [
  {path: 'personal', component: PersonalDataComponent},
  {path: 'account', component: FormComponent},
  {path: 'dashboard', component: TableComponent},
  {path: 'edit/:i', component: FormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
