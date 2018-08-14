import { Component, OnInit,Input } from '@angular/core';
import {Company} from '../company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})

export class CompanyDetailComponent implements OnInit {
  @Input()  company:Company; //@Input 装饰器来让company属性可以在外部的CompaniesComponent中绑定。
  constructor(
    private route:ActivatedRoute,
    private companyService:CompanyService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getCompany();
  }
  getCompany(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company=company);
  }
  goBack(): void {
    this.location.back();
  }
  save():void{   
    if(this.company.name===''){
      alert('名称不能为空!');
    }else{
    this.companyService.updateCompany(this.company)
      .subscribe(()=>this.goBack());
    }
  }
}
