import { Component,ViewChild,ContentChild, AfterContentInit ,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements AfterContentInit,OnInit{
  @ContentChild(NavbarComponent) addNotesChild;
  public addNotesData;
  notes:Array<any>=[];
  searchText;
  index;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private formBuilder : FormBuilder) {}
  ngOnInit(){
    this.notes =[
      {
        "title" : 'Priya',
        "text"  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        "title" : 'Priya',
        "text"  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        "title" : 'Priya',
        "text"  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        "title" : 'Priya',
        "text"  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        "title" : 'Priya',
        "text"  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ]
   }
    ngAfterContentInit(){
  
    }
    addNotes(){
        this.addNotesData = this.addNotesChild.getAddNotesForm();
        if(this.addNotesData.value.noteTitleCtrl != ''){
        this.notes.unshift({ 
          "title": this.addNotesData.get('noteTitleCtrl').value,
          "text" : this.addNotesData.get('enteredNotesCtrl').value
        })
      }
    }
    selectedRow(index){
      this.index = index;
    }
    deleteNotes(){
      this.notes.splice(this.index,1);
    }
}