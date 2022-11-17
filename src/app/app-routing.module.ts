import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';

const routes: Routes = [
  {
    component:OtpPageComponent,path:'otp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  OtpPageComponent
]