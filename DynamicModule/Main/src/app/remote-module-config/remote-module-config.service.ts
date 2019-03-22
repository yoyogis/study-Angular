import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class RemoteModuleConfigService {

  constructor(private http:Http) { }

  createModuleType(moduleType):Observable<Array<any>>{
    return this.http.post('/configapi/moduleTypes', moduleType).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  getModuleTypes():Observable<Array<any>>{
    return this.http.get('/configapi/moduleTypes').pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  getModules():Observable<Array<any>>{
    return this.http.get('/configapi/modules').pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  updateModule(module):Observable<Array<any>>{
    return this.http.put(`/configapi/modules/${module.id}`, module).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  createModule(module):Observable<Array<any>>{
    return this.http.post(`/configapi/modules`, module).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  deleteModule(moduleId):Observable<Array<any>>{
    return this.http.delete(`/configapi/modules/${moduleId}`).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  private popupSuccessMessage(){
    console.log("成功。。。");
  }
}
