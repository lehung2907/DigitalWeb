import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DigitalWebSharedModule } from 'app/shared/shared.module';
import { DigitalWebCoreModule } from 'app/core/core.module';
import { DigitalWebAppRoutingModule } from './app-routing.module';
import { DigitalWebHomeModule } from './home/home.module';
import { DigitalWebEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DigitalWebSharedModule,
    DigitalWebCoreModule,
    DigitalWebHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DigitalWebEntityModule,
    DigitalWebAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DigitalWebAppModule {}
