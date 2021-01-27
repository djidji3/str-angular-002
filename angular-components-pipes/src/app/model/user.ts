import { Output } from "@angular/core";

export class User {
  /* egy user hogy nez ki */
  id: number = 0;
  name: string = '';
  email: string = '';

  constructor(id?: number, name?: string, email?:string){
    this.id = id || 0;
    this.name= name || 'nem megadott';
    this.email= email || 'nem megadott';
  }
}
