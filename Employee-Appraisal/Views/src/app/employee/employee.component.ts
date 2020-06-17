import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();


  }



  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      department: "",
      date:"",
      performance: null,
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    console.log(form)
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });

    }
    var content =Array.from(document.getElementsByClassName('content') as HTMLCollectionOf<HTMLElement>)
    content[0].style.display = "none";
  }

  collapse()
  {
    // var coll = document.getElementsByClassName("collapsible");
    // var content = document.getElementsByClassName("content");
    // content.setAttribute("style", "display:block;");

    var content =Array.from(document.getElementsByClassName('content') as HTMLCollectionOf<HTMLElement>)
    // content[0].style.display="block";
    // content[0].style.backgroundColor=pink;

    if (content[0].style.display === "block") {
      content[0].style.display = "none";
    } else {
      content[0].style.display = "block";
    }
    
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.collapse();
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
