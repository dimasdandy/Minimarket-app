import { Injectable } from '@angular/core';
import { LoginResDtoData } from '../models/login-dto/login-res-dto-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveProfile(profile : LoginResDtoData){
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile() : LoginResDtoData{
    let profile = localStorage.getItem('profile');
    if (profile) {
      return JSON.parse(profile);
    }
    return new LoginResDtoData;
  }

  isLogin() : boolean {
    let profile = localStorage.getItem('profile');
    return profile != null && profile != undefined;
  }

  onLogout() {
    localStorage.clear();
  }

}
