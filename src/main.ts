import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StandComponent } from './app/stand/stand.component';
import { AppComponent } from './app/app.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


