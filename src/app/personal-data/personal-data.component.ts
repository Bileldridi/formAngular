import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';



@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  constructor() {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
        startWith(null),
        map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));
  }
  // options: string[] = ['French', 'English', 'Arabic'];
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  allSkills: string[] = ['JS', 'CSS', 'BOOTSTRAP', 'ANGULAR', ];
  @ViewChild('skillInput', {static: false}) skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  formulaire = new FormGroup({
    contact: new FormGroup({
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
      }),
      skillang : new FormArray([
      ]),
      proexp : new FormArray([
        this.addProExp()
      ])
    });

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      (this.formulaire.get('skillang') as FormArray).push(
        new FormControl(value, [Validators.required]));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.skillCtrl.setValue(null);
  }


  selected(event: MatAutocompleteSelectedEvent) {
    (this.formulaire.get('skillang') as FormArray).push(
                        new FormControl(event.option.viewValue, [Validators.required]));
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }

  remove(i): void {
    (this.formulaire.get('skillang') as FormArray).removeAt(i);
  }

    addProExpClick(): void {
      (this.formulaire.get('proexp') as FormArray).push(this.addProExp());
    }

     addProExp() {
       return new FormGroup({
     experience: new FormControl('', [Validators.required]),
     company: new FormControl('', [Validators.required]),
     period: new FormControl('', [Validators.required]),
    });
  }
  removeProExpClick(i): void {
    (this.formulaire.get('proexp') as FormArray).removeAt(i);
  }

  onSubmit() {
    console.log(this.formulaire.value);

  }



  ngOnInit() {
  }

}
