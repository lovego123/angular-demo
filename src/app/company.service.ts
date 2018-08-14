import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './company';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CompanyService {
  private companiesUrl = 'api/companies';  // URL to web api
  
  constructor(
    private http:HttpClient,
    private messageService:MessageService) { }

  getCompanies():Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl)
      .pipe(
        tap(companies => this.log('浏览了企业列表')),
        catchError(this.handleError('getCompanies', []))
      );
  }
  getCompany(id:number):Observable<Company>{
    const url=`${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url).pipe(
      tap(_ =>this.log(`浏览了企业详情id=${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }
  updateCompany(company:Company):Observable<any>{
    return this.http.put(this.companiesUrl,company,httpOptions).pipe(
      tap(_ =>this.log(`更新了企业${company.name}`)),
      catchError(this.handleError<any>('updateCompany'))
    );
  }
  addCompany(company:Company):Observable<Company>{
    return this.http.post<Company>(this.companiesUrl,company,httpOptions).pipe(
      tap((company:Company)=>this.log(`添加了新企业${company.name}`)),
      catchError(this.handleError<Company>('addCompany'))
    );
  }
  deleteCompany(company:Company|number):Observable<Company>{
    const id=typeof company ==='number' ? company:company.id;
    const url=`${this.companiesUrl}/${id}`;

    return this.http.delete<Company>(url,httpOptions).pipe(
      tap(_=>this.log(`删除了企业id=${id}`)),
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }
  searchCompanies(term:string):Observable<Company[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Company[]>(`${this.companiesUrl}/?name=${term}`).pipe(
      tap(_=>this.log(`查询匹配 "${term}"`)),
      catchError(this.handleError<Company[]>('searchCompanies',[]))
    );
  }
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  private log(message:string){
    this.messageService.add(`${new Date().toString().slice(0,-17)}: ${message}`);
  }

}
