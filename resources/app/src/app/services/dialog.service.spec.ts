import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { WindowsModule } from 'dist/pto-win32-x64/resources/app/src/app/windows/windows.module';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      WindowsModule
    ]
  }));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
