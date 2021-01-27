import { createOutput } from '@angular/compiler/src/core';
import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
/*  a usereket kivulrol kapja,ezert itt nem adom meg*/
/*   user1: User = new User(1000, 'Geza', 'geza@a.hu'); */

/* kuvulrol kapja ezert a @Input() */
@Input() userPeldany: User = new User();

/* atadom hogy mas fel tudja hasznalni,ezt az sajat egyedi esemenyt, ami User tipusu */
@Output() delUser: EventEmitter<User> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  /* metodus ami vegzi a user torleset */
  onDeleteUser(): void{
    /* a delUser esemyt elsutom a useren */
    this.delUser.emit(this.userPeldany);
  }

}
