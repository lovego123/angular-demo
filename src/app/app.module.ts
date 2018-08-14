import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CompanyService } from './company.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CompanySearchComponent } from './company-search/company-search.component';



@NgModule({//每个组件都必须声明在（且只能声明在）一个 NgModule 中
  declarations: [
    CompanyDetailComponent,
    MessagesComponent,
    AppComponent,
    CompanySearchComponent,
    CompaniesComponent, 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /**模拟服务器 */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [CompanyService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
