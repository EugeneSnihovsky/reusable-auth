'use strict';

import { Injectable } from '@angular/core';
import { NotifyService } from '@agiliumlabs/ng2-notify';

import { ReusableService } from '../reusable.service';

@Injectable()
export class SignInSharedComponent {

    public constructor(
        protected _notify: NotifyService,
        protected _reusable: ReusableService
    ) {}

    public callReusableNotify() {
        this._notify.notifySuccess('sign-in', 'Reusable module in reusable auth work!');
    }

    public callReusableService() {
        let someMessage: string = this._reusable.getSomething();
        someMessage = `Reusable service return data: ${someMessage}`;
        alert(someMessage);
    }

}
