import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService]
})
export class HomeComponent implements OnInit {

  isCashier = false;
  items: MenuItem[] = [];
  itemsCart: MenuItem[] = [];

  constructor(private router: Router, private authService: AuthService, private title: Title, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.title.setTitle('Home');
    if (this.authService.getProfile().role == 'KSR') {
      this.isCashier = true;
    }
    this.menubar();
  }

  logout(): void {
    this.authService.onLogout();
    this.router.navigate(['/login']);
  }

  menubar(): void {
    this.items = [
      {
        label: 'Roles',
        icon: 'pi pi-fw pi-bars',
        routerLink: "/role-list"
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        routerLink: "/user-list"
      },
      {
        label: 'Members',
        icon: 'pi pi-fw pi-users',
        routerLink: "/member-list"
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-paperclip',
        routerLink: "/category-list"
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-tag',
        routerLink: "/product-list"
      },
      {
        label: 'Payments',
        icon: 'pi pi-fw pi-wallet',
        routerLink: "/payment-list"
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.confirm(),
      }
    ];

    this.itemsCart = [
      {
        label: 'Carts',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: "/cart-list"
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.confirm(),
      }
    ]
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure to Logout?',
      accept: () => {
        this.logout();
      }
    });
  }
}
