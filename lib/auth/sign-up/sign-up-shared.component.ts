'use strict';

import { Injectable } from '@angular/core';
import { NotifyService } from '@agiliumlabs/ng2-notify';

@Injectable()
export class SignUpSharedComponent {

    public constructor(
        protected _notify: NotifyService
    ) {}

    public callReusableNotify() {
        this._notify.notifySuccess('sign-up', 'Sign up notification');
    }

}

