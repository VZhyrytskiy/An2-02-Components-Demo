import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Modules
 */
import { ChangeDetectionModule } from './components/07-change-detection-strategies/change-detection-strategies.module';
import { CommunicationModule } from './components/02-communication/communication.module';
import { DynamicComponentLoadingModule } from './components/08-dynamic-component-loading/dynamic-component-loading.module';
import { HostModule } from './components/03-host-binding-host-listener/host.module';
import { LifecycleHooksModule } from './components/06-lifecycle-hooks/lifecycle-hooks.module';
import { ListModule } from './components/01-display-data/01-list/list.module';
import { ProjectionModule } from './components/04-projection/projection.module';
import { StylingModule } from './components/05-styling/styling.module';
import { SvgModule } from './components/01-display-data/02-svg/svg.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,

    ChangeDetectionModule,
    CommunicationModule,
    DynamicComponentLoadingModule,
    HostModule,
    LifecycleHooksModule,
    ListModule,
    ProjectionModule,
    StylingModule,
    SvgModule,
    DirectivesModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA /* or NO_ERRORS_SCHEMA  */]
})
export class AppModule {}
