// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { AddonModLtiComponentsModule } from './components/components.module';
import { AddonModLtiModuleHandler } from './providers/module-handler';
import { AddonModLtiProvider } from './providers/lti';
import { AddonModLtiLinkHandler } from './providers/link-handler';
import { AddonModLtiListLinkHandler } from './providers/list-link-handler';
import { CoreContentLinksDelegate } from '@core/contentlinks/providers/delegate';
import { CoreCourseModuleDelegate } from '@core/course/providers/module-delegate';

// List of providers (without handlers).
export const ADDON_MOD_LTI_PROVIDERS: any[] = [
    AddonModLtiProvider
];

@NgModule({
    declarations: [
    ],
    imports: [
        AddonModLtiComponentsModule
    ],
    providers: [
        AddonModLtiProvider,
        AddonModLtiModuleHandler,
        AddonModLtiLinkHandler,
        AddonModLtiListLinkHandler
    ]
})
export class AddonModLtiModule {
    constructor(moduleDelegate: CoreCourseModuleDelegate, moduleHandler: AddonModLtiModuleHandler,
            contentLinksDelegate: CoreContentLinksDelegate, linkHandler: AddonModLtiLinkHandler,
            listLinkHandler: AddonModLtiListLinkHandler) {

        moduleDelegate.registerHandler(moduleHandler);
        contentLinksDelegate.registerHandler(linkHandler);
        contentLinksDelegate.registerHandler(listLinkHandler);
    }
}
