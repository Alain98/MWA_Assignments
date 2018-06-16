import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userInfoService: FetchDataService,
  /*private router: Router*/) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': ['', [Validators.required]],
        'email': ['', [Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'post': ['', [Validators.required, Validators.minLength(10)]]
      })
    })
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    Validators.pattern
    if (control.value === '') {
      return { email: true };
    }
    return null;
  }

  onGetData() {
    this.userInfoService.getUserData().subscribe((userData) => {
      this.userInfoService.getPosts().subscribe((posts) => {
        this.myForm.patchValue({ userData: { name: userData['name'] } });
        this.myForm.patchValue({ userData: { email: userData['email'].toLowerCase() } });
        this.myForm.patchValue({ userData: { post: posts[0]['title'] } });
      });
    });
  }

  onSubmit() {
    console.log('Reactive Form Data: ');
    console.log(this.myForm.value);

    //this.router.navigateByUrl('/success');
  }
}
