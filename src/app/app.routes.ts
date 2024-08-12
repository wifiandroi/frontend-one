import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';


  export const routes: Routes = [
    {
        path:'', component:DashboardComponent, title:'Página de inicio'
    },
    
    { 
      path: 'inicio', component: DashboardComponent, title: 'Página de inicio' 
    },  
    { 
      path: 'iniciar-sesion', component: LoginComponent, title: 'Login' 
    },
    {
        path:'**', redirectTo:'', pathMatch:'full' 
    }
];