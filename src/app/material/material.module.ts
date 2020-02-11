import { NgModule } from '@angular/core';
import {
  MatSliderModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatChipsModule,
  MatAutocompleteModule,
} from '@angular/material';

const MaterialComponents = [
  MatSliderModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatChipsModule,
  MatAutocompleteModule,
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
