import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { User } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'elextbook-console';

  isDarkTheme: boolean;

  constructor(
    public user: User,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    const body = this._document.body;
    const isDarkTheme = this.isDarkTheme = !this.isDarkTheme;

    isDarkTheme
      ? body.classList.add('dark-theme')
      : body.classList.remove('dark-theme');
  }
}
