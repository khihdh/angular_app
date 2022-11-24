import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  names: any;
  message: any;
  onSave(){
    if(this.names.includes("@")){
      alert("message sent");
      this.names='';
      this.message='';
    }
    else{
      alert("invalid address")
    }



  }

  title = 'contact-form';

}
