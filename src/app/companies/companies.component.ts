import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService} from '../company.service';

@Component({//@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
  selector: 'app-companies',//组件的选择器（CSS 元素选择器）
  //CSS 元素选择器 app-companies 用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
  templateUrl: './companies.component.html',//组件模板文件的位置。
  styleUrls: ['./companies.component.css'],//组件私有 CSS 样式表文件的位置。
})
export class CompaniesComponent implements OnInit {

  companies:Company[];

  constructor(private companyService:CompanyService) { }

  getCompanies():void{
    this.companyService.getCompanies()
      .subscribe(companies => this.companies=companies);
  }

  ngOnInit() {//生命周期钩子会在创建实例之后的某个合适的时机调用
    this.getCompanies();
  }

  add(name:string,established_time:string,main_business:string):void{
    name=name.trim();
    established_time=established_time.trim();
    main_business=main_business.trim();
    if(!name){return;}
    this.companyService.addCompany({name,established_time,main_business} as Company)
      .subscribe(company=>{this.companies.push(company)});
  }
  delete(company:Company):void{
    this.companies=this.companies.filter(h=>h!==company);
    this.companyService.deleteCompany(company).subscribe();
  }

}
