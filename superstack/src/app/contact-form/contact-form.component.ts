import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
// import { FormsModule } from '@angular/forms'; 

// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  title="Contact Form";

  ContactForm!: FormGroup;
  isSubmit = true;
  submitMessage = "";

  // contactCollection!: AngularFirestoreCollection<any>;
  // constructor(private formBuilder: FormBuilder, private afs: AngularFirestore) { 
  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    // this.contactCollection = this.afs.collection('contacts');

    this.ContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ContactForm.valid) {
      const formData = this.ContactForm.value;
      console.log(formData);
  
      axios
        .post('http://localhost:8000/contact', formData)
        .then(response => {
          console.log(response);
          this.submitMessage = "Message Sent Successfully";
          this.ContactForm.reset();
        })
        .catch(error => {
          console.error(error);
          this.submitMessage = "Message not sent!!";
        })
        .finally(() => {
          this.isSubmit = true;
          setTimeout(() => {
            this.isSubmit = false;
          }, 5000);
        });
    }
  }
  
}
