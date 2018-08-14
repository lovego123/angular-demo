import { Component, OnInit } from '@angular/core';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css'],
})
export class CompanySearchComponent implements OnInit {
  //companies$ 声明为一个 Observable
  companies$:Observable<Company[]>;
  /**
   * searchTerms 属性声明成了 RxJS 的 Subject 类型
   * Subject 既是可观察对象的数据源，本身也是 Observable
   */
  private searchTerms=new Subject<string>();
  constructor(private companyService:CompanyService) { }

// 将搜索词推送到观察流中
  search(term:string):void{
    this.searchTerms.next(term);
  }
 
  //以下操作都是为了避免大量search浪费资源
  ngOnInit() {
    this.companies$ = this.searchTerms.pipe(
      // 只有输入框停歇超过300毫秒才进行传送（实际中每次输入间歇都会超过300毫秒）
      debounceTime(300),
 
      // 忽略和之前的搜索词一样的情况
      distinctUntilChanged(),
 
      // switchMap() 会为每个从 debounce 和 distinctUntilChanged 中通过的
      //搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
      switchMap((term: string) => this.companyService.searchCompanies(term)),
    );
  }

}
