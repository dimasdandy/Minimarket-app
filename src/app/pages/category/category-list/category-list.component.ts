import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllPathResData } from 'src/app/models/category-dto/find-all-path-res-data';
import { CategoryService } from 'src/app/services/category.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CategoryListComponent implements OnInit {

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private categoryService: CategoryService, private title: Title, private route: Router) { }

  data: FindAllPathResData[] = []

  ngOnInit(): void {
    this.title.setTitle('Category List');
    this.initData();
  }

  update(id?: number): void {
    this.route.navigate(['/category-update/'+id])
  }

  initData(): void {
    this.categoryService.getAll().toPromise().then(res => {
      this.data = res.data!
    })
  }

  delete(id: number, event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.delete(id).toPromise().then(res => {
          this.initData();
        })
      },
      reject: () => {

      }
    });
  }

  
}
