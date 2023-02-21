import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/shared/comments';
import {comment} from 'src/app/shared/comment'
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../../shared/dish'
import { DishService } from 'src/app/services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {

  dish: Dish
  dishIds: string[];
  prev: string;
  next: string;

  // form variables

  CommentForm: FormGroup;
  comments: Comment;
  comment:comment


  formErrors = {
    'name': '',
    'comment': ''
  }

  validationMessages = {
    'name': {
      'required': 'Name is required',
      'minlength':'Name must be least more 2 caracthers',
      'maxlength':'Name cannot be more than 25 caracthers!!'
    },
    'comment': {
      'required': 'Comment is required',
      'minlength': 'Commet must be least more 4 caracthers',
      'maxlength': 'Comment cannot be more than 200 caracthers'
    }
  }

  constructor(private dishService: DishService,
    private fb: FormBuilder,
    private Location: Location,
    private route: ActivatedRoute,
    @Inject('baseURL') public baseURL) {
    this.createForm()
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe((dishIds) => this.dishIds = dishIds)
    this.route.params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe((dish) => { this.dish = dish; this.setPrevNext(this.dish.id); })
    }

  createForm(): void {
    this.CommentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      rating:[Number]
    })

    this.CommentForm.valueChanges.subscribe(data => this.onValueChanged(data))

    this.onValueChanged()
  }

  onValueChanged(data?: any) {
    if (!this.CommentForm) { return; }
    const form = this.CommentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit(): void {
    this.comments = this.CommentForm.value;
    this.comment = {
      rating: this.CommentForm.get('rating').value ,
      author :this.CommentForm.get('name').value,
      comment: this.CommentForm.get('comment').value,
      date: Date.now().toString()
    }
    this.dish.comments.push(this.comment);
    this.CommentForm.reset({
      name: '',
      comment: ''
    })
  }

  setPrevNext(dishId: string): void {
    const index = this.dishIds.indexOf(dishId)
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]
  }

  goBack(): void {
    this.Location.back()
  }
}
