import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State } from '../../state/';
import { LoadGiphyImages } from '../../state/image/';
import { Observable } from 'rxjs';
import { getImages } from '../../state/image/image.selectors';


@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})

export class ImageSearchComponent implements OnInit {

  public images$: Observable<any>;
  protected readonly limit = 25;
  protected readonly filters = [10, 20 , 25];


  ImageForm = new FormGroup({
    name: new FormControl(''),
    page: new FormControl(this.filters[2]),
  });

  constructor( private readonly store: Store<State>) { }

  ngOnInit() {
    this.images$ = this.store.select(getImages());
  }

  onSubmit(query: string, limit: number) {
    // tslint:disable-next-line:max-line-length
    const swearWords = /crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;
    if (!swearWords.test(query)) {
      this.store.dispatch(new LoadGiphyImages(query, 1, limit));
    }
  }
}