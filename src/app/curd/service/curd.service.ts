import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curd } from '../model/curd';



@Injectable({
  providedIn: 'root'
})
export class CurdService {

 url ="http://localhost:2000/api/"

// http options
private httpOptions = {
  headers: new HttpHeaders()
  .set("content-type","application/json")
  // .set("auth-token",localStorage.getItem("token"))
}


  constructor(private http:HttpClient) { }

  getdata(): Observable<Curd[]> {
    return this.http.get<Curd[]>(this.url+'cruds');
  }
 
  viewdata(id:any){
    return this.http.get<Curd[]>(this.url+'crudview/'+id)
  }
 
  insertdata(data:any):Observable<Curd[]>{
     console.log(data);
   return this.http.post<any>(this.url+'crudinsert',data, this.httpOptions)
  }

  update(data:any,id:any):Observable<Curd[]>{
    console.log(data);
    return this.http.put<Curd[]>(this.url +'crudupdate/'+id,data);
  }

  delete(id:any){
    return this.http.get<any>(this.url+'cruddelete/'+id,this.httpOptions)
  }

  imageinsert(data:any){
    return this.http.post<any>(this.url+'imageinsert',data);
  }
  imagedisplay():Observable<Curd[]> {
    return this.http.get<Curd[]>(this.url+'image');
  }
 

}
