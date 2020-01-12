import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mainLayout : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm(){
    this.mainLayout = this.formBuilder.group({
      'noteTitleCtrl' : this.formBuilder.control(''),
      'enteredNotesCtrl' : this.formBuilder.control('')
    });
   }
   public getAddNotesForm() : FormGroup{
  return this.mainLayout;
   }
}
