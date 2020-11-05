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
  MatToolbarModule,
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
  MatToolbarModule,
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
