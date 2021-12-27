import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { Subscription } from 'rxjs';
import { Firebase, FIREBASE } from 'src/app/services/firebase';
import { User } from 'src/app/services/user.service';
import { WorkbookData, WorkbookQuiz } from './types';

@Component({
  selector: 'app-workbook-generator',
  templateUrl: './workbook-generator.component.html',
  styleUrls: ['./workbook-generator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'wg eb-view' }
})
export class WorkbookGeneratorComponent implements OnInit, OnDestroy {
  hasLoaded: boolean;
  editable: boolean;

  userChangeSubscription: Subscription;


  categories: string[] = ['', ''];
  selectedCategory: boolean;

  data: WorkbookData = {
    id: '',
    title: '',
    shortTitle: '',
    desc: '',
    tags: [''],
    quiz: {
      // Category
      '': {
        index: 0,
        displayName: ''
      }
    },
    searchToken: {}
  };

  quiz: WorkbookQuiz = {
    // Category
    '': [],
  };

  hasUsedCommonAnswers: boolean;

  constructor(
    user: User,
    private _ngZone: NgZone,
    private _changeDetector: ChangeDetectorRef,
    @Inject(DOCUMENT) public document: Document,
    @Inject(FIREBASE) private _firebase: Firebase
  ) {
    this.userChangeSubscription = user.changes.subscribe((state) => {
      this.hasLoaded = true;

      if (state) {
        const email = state.email;

        if (email === 'miurajunpeis2@gmail.com' || email === 'elextbook@gmail.com') {
          this.editable = true;
  
        } else {
          this.editable = false;
          user.signOut();
        }

      } else {
        this.editable = false;
      }

      _ngZone.run(() => _changeDetector.markForCheck());
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userChangeSubscription.unsubscribe();
  }

  signIn(): void {
    this.hasLoaded = false;

    this._ngZone.runOutsideAngular(() => {
      const auth = this._firebase.auth;
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .catch(() => {
          this.hasLoaded = true;
          this._ngZone.run(() => this._changeDetector.markForCheck());
        })
    });

    this._changeDetector.markForCheck();
  }

  trackValue(index: number, value: string) {
    return index;
  }
}
