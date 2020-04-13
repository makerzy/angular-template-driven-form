import { Component } from '@angular/core';
import { User } from './user';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angulartdf';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError: boolean = true;
  userModel = new User(
    'Sam',
    'sam@sam.com',
    8888888888,
    'default',
    'morning',
    true
  );
  submitted = false;
  errorMsg = '';

  constructor(private enroll: EnrollService) {}
  validateTopic(value) {
    if (value == 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.enroll.enroll(this.userModel).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => (this.errorMsg = error.statusText)
    );
  }
}
