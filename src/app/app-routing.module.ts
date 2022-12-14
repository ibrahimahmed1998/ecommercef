import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
///////////// Product Component ///////////////
import { ListallComponent } from './pages/product/listall/listall.component';
import { SingleComponent } from './pages/product/single/single.component';
import { AddproductComponent } from './pages/product/add/addproduct.component';
import { EditproductComponent } from './pages/product/edit/editproduct.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'myaccount', component:MyprofileComponent},

/////////////// Prodcut Area /////////////////////////////////////////////////
  { path: '', component:ListallComponent },
  { path: 'single/:id', component:SingleComponent }, 
  { path: 'addproduct', component:AddproductComponent },  
  { path: 'edit_product/:id', component:EditproductComponent},

  { path: '**', redirectTo: '' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
