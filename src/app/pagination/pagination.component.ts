import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Route } from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{

 pages: any[]= [];
 @Input() pagenumber = 0 ;
 @Input() nopages = 0;
 @Output("goToPage") goToPage:EventEmitter<any> = new EventEmitter();
 @Output("next") next:EventEmitter<any> = new EventEmitter();
 @Output("back") back:EventEmitter<any> = new EventEmitter();

 ngOnChanges(changes: SimpleChanges){
  const numAdjacentPages = 2; 
  const numTotalPagesToShow = 5; 
  const startPage = Math.max(1, this.pagenumber - numAdjacentPages);
  const endPage = Math.min(this.nopages, this.pagenumber + numAdjacentPages);
  const numPagesToShow = Math.min(numTotalPagesToShow, this.nopages);
  this.pages = Array(numPagesToShow).fill(0).map((_, i) => startPage + i).filter(page => page >= 1 && page <= this.nopages);
 }
 

}
