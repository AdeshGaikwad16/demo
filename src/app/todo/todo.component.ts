import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';
import { MatAccordion  } from "@angular/material/expansion";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm !:FormGroup;
  updateId!:any;
 
  isEditEnabled : boolean =false;
  tasks: any[] = [];
  data={
    title:"",
  description:"",
  status:""
  };
constructor(private snackBar: MatSnackBar,private fb:FormBuilder,private bc:BackendService){}

  ngOnInit() {
    // Fetch tasks from Firebase
    this.todoForm=this.fb.group({
      item : ['', Validators.required]
    })
  }

  onSubmit() {
    // Add task to Firebase
    console.log("Try to Submit Form");
    this.bc.Senddata(this.data).subscribe(
      Response=>{
        console.log(Response);
        
      },
      error=>{
        console.log(error);
      }
    )
  }

  onUpdate(task: any) {
    // Update task in Firebase
    this.tasks[this.updateId].description = this.todoForm.value.item;
  this.tasks[this.updateId].done=false;
  this.todoForm.reset();
  this.updateId =undefined;
  this.isEditEnabled = false;
  }

  onDelete(task: any) {
    // Delete task from Firebase
  
    this.tasks.splice(task.id,1)
  }
}

