import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  //Create employee property of type Employee class -> new employee object
  employee: Employee = new Employee();
  constructor(private employeeService:EmployeeService,private router:Router){}
  
  ngOnInit(): void{

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data=>{
        console.log(data);
        this.goToEmployeeList();
      }
    )
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
