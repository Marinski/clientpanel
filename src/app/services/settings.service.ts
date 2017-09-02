import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {
  settings:Settings = {
    allorRegistration:false,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }

  constructor() { }

  getSettings(){
    return this.settings;
  }

}
