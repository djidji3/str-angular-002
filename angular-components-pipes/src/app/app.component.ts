import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* attibute binding */
  title = 'Data binding examples';

   /* property binding */
  btnDisabled :boolean = false;

/* usereket tartalmazo tomb */
users :User[] = [
  new User(1001 , 'Amcsa', 'a@boan.hu'),
  new User(1002 , 'Marcsa', 'ma@boan.hu'),
  new User(1003 , 'Kata', 'ka@boan.hu'),
]

  /* ez kacsolgatja a gombot a ket allapot kozott */
  onSwitchBtnStatus(): void{
    this.btnDisabled = !this.btnDisabled;
  }

  onShowGreeting(): void{
    alert('Megnyomtad a gomot!')
  }

  onDeleteOneUser(user: User): void{
    let index = 0;
    for (let i=0; i<this.users.length; i++){
      if(user.id === this.users[i].id){
        index = i;
      }
    }
    this.users.splice(index, 1);
  }


}
