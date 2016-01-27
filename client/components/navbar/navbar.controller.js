'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('wcsdesktopApp')
  .controller('NavbarController', NavbarController);
