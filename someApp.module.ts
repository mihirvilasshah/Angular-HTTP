import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SomeInterceptorService } from './someInterceptor.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      // To use the interceptor anywhere
      provide: HTTP_INTERCEPTORS, 
      useClass: SomeInterceptorService,
      multi: true
    }
  ]
})
export class SomeAppModule { }