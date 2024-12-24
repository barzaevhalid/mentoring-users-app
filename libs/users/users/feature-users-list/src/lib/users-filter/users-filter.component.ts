import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFilterComponent {
  store = inject(Store);
  form = new FormControl('');

  @Output() filteredUsers = new EventEmitter();

  filterUsers() {
    this.filteredUsers.emit({ filter: { name: this.form.value }});
  }
}
