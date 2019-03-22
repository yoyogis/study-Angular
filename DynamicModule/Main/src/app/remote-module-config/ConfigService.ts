import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:Http) { }

  createTemplate(template):Observable<Array<any>>{
    return this.http.post('/configapi/templates', template).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  getTemplates():Observable<Array<any>>{
    return this.http.get('/configapi/templates').pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  getInstances():Observable<Array<any>>{
    return this.http.get('/configapi/instances').pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  updateInstance(instance):Observable<Array<any>>{
    return this.http.put(`/configapi/instances/${instance.id}`, instance).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  createInstance(instance):Observable<Array<any>>{
    return this.http.post(`/configapi/instances`, instance).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  deleteInstance(instanceId):Observable<Array<any>>{
    return this.http.delete(`/configapi/instances/${instanceId}`).pipe(map(response=>{
      return response.json();
    }),tap(x=>this.popupSuccessMessage));
  }

  private popupSuccessMessage(){
    console.log("成功。。。");
  }
}
