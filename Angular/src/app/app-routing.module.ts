import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { Child1Component } from './child1/child1.component';
import { GenerateerrorComponent } from './generateerror/generateerror.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplayComponent } from './replay/replay.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SharedataComponent } from './sharedata/sharedata.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
 {path:'databinding',component: HelloComponent},
 {path:'products',component: ProductComponent},
 {path:'masterdetails',component: PurchaseComponent},
 {path:'attributedirective',component: AttributedirectiveComponent},
 {path:'sharedata',component: SharedataComponent},
 {path:'generateerror',component: GenerateerrorComponent},
 {path:'login',component: LoginComponent},
 {path:'rxjs',component: RxjsComponent},
 {path:'behaviour',component: BehaviourComponent},
 {path:'replay',component: ReplayComponent},
 {path:'async',component: AsyncComponent},
 {path:'',redirectTo: 'home',pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
