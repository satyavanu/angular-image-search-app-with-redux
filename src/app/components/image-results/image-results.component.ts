import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/';
import { LoadGiphyImages } from '../../state/image/image.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-image-results',
  templateUrl: './image-results.component.html',
  styleUrls: ['./image-results.component.css']
})
export class ImageResultsComponent implements OnInit {

  @Input() images: [];
  @Input() limit;
  @Output() pageChange: EventEmitter<number>;

  constructor( private readonly store: Store<State>) { }

  ngOnInit() {
  }

  pageChanged(pageNumber: number): void {
    this.store.select('images')
    .pipe(take(1))
    .subscribe(images => this.store.dispatch(new LoadGiphyImages(images.query, pageNumber, this.limit)));
  }

}
