import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Empl, EmplJust, Equipment } from 'src/app/types';
import { newEquip } from 'src/app/utility';
import { DialogService } from 'src/app/services/dialog.service';
import { StoreService } from 'src/app/services/store.service';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-info-empl',
  templateUrl: './info-empl.component.html',
  styleUrls: ['./info-empl.component.scss']
})
export class InfoEmplComponent implements OnInit {

  @Input() empl: Empl;

  loading = false;

  message = 'Выберите сотрудника';

  @Output() update = new EventEmitter<any>();

  constructor(
    public store: StoreService, private client: DialogService
  ) {}

  ngOnInit() {
    this.closePanel();
  }

  addEquip() {
    this.client.promptEquip(newEquip(this.empl), data => {

      this.store.createEquip(data, this.empl.id);
    });
  }

  changeHolderOfEquips(equips: MatListOption[]) {
    this.client.searchEmpl(res => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < equips.length; i++) {
        equips[i].value.holderId = res.id;
      }
    });
  }

  delete() {
    if (this.equips.length !== 0) {
      this.client.alert(
        'Вы не можете удалить сотрудника, т. к. за ним закрепленно оборудование.' +
        '<br>Передайте всё оборудование другим сотрудникам, чтобы продолжить действие'
      );
      return;
    }

    this.store.deleteEmpl(this.empl.id);
    this.update.emit();
    this.closePanel();
  }

  toUpdateDataOfEmpl() {
    this.client.promptEmpl(this.empl, res => {
      this.store.updateEmpl(res, this.empl.id);
      this.updateEmplInfo();
    });
  }

  updateEmplInfo() {
    this.empl = null;
    this.closePanel();
    this.message = null;

    this.empl = this.store.findEmplInStorage(this.empl.id);
  }

  get equips() {
    return this.store.equips.filter(equip => {
      return equip.holderId === this.empl.id;
    });
  }

  closePanel() {
    this.empl = null;

    this.message = 'Выберите сотрудника';
  }
}
