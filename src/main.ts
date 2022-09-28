import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


/*
we can load our custom module at app start up by providing custom module name

platformBrowserDynamic().bootstrapModule(CustomModule)
   .catch(err => console.error(err));
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
