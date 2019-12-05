import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { newEmpl } from '../utility';

describe('StoreService', () => {

  it('creating employees', () => {
    const store = new StoreService();
    store.saveData = () => {};

    for (let i = 0; i < 20; i++) {
      const fakeEmpl = newEmpl();
      fakeEmpl.name = 'Employee - ' + i;
      store.createEmpl(fakeEmpl);
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < store.empls.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = i + 1; j < store.empls.length; j++) {
        expect(store.empls[j].id).toBeTruthy();
        expect(store.empls[i].id).not.toBe(store.empls[j].id);
      }
    }

    expect(store.empls.length).toBe(20);
  });

  it('delete empl', () => {
    const store = new StoreService();
    store.saveData = () => {};

    for (let i = 0; i < 20; i++) {
      const fakeEmpl = newEmpl();
      fakeEmpl.name = 'Employee - ' + i;
      store.createEmpl(fakeEmpl);
    }
    expect(store.empls.length).toBe(20);

    const randomIndex = Math.floor(Math.random() * store.empls.length);
    const IdOfRandomEmpl = store.empls[randomIndex].id;

    store.deleteEmpl(IdOfRandomEmpl);

    expect(store.empls.length).toBe(19);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < store.empls.length; i++) {
      expect(store.empls[i].id).not.toBe(IdOfRandomEmpl);
    }
  });

  it('update and find', () => {
    const store = new StoreService();
    store.saveData = () => {};

    for (let i = 0; i < 20; i++) {
      const fakeEmpl = newEmpl();
      fakeEmpl.name = 'Employee - ' + i;
      store.createEmpl(fakeEmpl);
    }
    const randomIndex = Math.floor(Math.random() * store.empls.length);
    const idOfRandomEmpl = store.empls[randomIndex].id;

    const newName     = 'updated name';
    const updatedEmpl = newEmpl();
    updatedEmpl.name  = newName;

    store.updateEmpl(updatedEmpl, idOfRandomEmpl);

    const expectingEmpl = store.findEmplInStorage(idOfRandomEmpl);
    expect(expectingEmpl.name).toBe(newName);
  });
});
