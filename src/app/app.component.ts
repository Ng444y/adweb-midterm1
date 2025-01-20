import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { AppPipesModule } from './app-pipes.module';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppPipesModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'services-demo';
  employees = [
    { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com' },
    { id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com' },
  ];
  products = [{ id: 1, name: 'Product A', price: 100 }];
  
  constructor(private _employeeService: EmployeeService, private _productService: ProductService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
