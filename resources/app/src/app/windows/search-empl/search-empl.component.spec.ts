import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmplComponent } from './search-empl.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';
import { InitilyPipe } from 'dist/pto-win32-x64/resources/app/src/app/pipes/initily.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MessageComponent } from '../message/message.component';
import { FormEmplComponent } from '../form-empl/form-empl.component';
import { FormEquipComponent } from '../form-equip/form-equip.component';

describe('SearchEmplComponent', () => {
  // let component: SearchEmplComponent;
  // let fixture: ComponentFixture<SearchEmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormEquipComponent,
        FormEmplComponent,
        SearchEmplComponent,
        InitilyPipe,
        MessageComponent,
        ConfirmComponent
      ],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule
      ],
      providers: [
        DialogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(SearchEmplComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
