import { CommonModule } from '@angular/common';
import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/LoginRequest';

import * as Sentry from '@sentry/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginError:string="";
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private router:Router,
    private loginService: LoginService,
    trace: Sentry.TraceService,
    
  ){  
                              // Forzar un error para prueba
                              // Sentry.captureException(new Error('Error de prueba para Crash Free Sessions.::1'));
  }

                                    // Método para probar la captura de errores con Sentry
                                    throwError() {
                                      try {
                                        // Simulando un error
                                        throw new Error('Este es un error de prueba para Sentry.:::2.1');
                                      } catch (error) {
                                        // Captura y reporta el error a Sentry
                                        Sentry.captureException(error);
                                      }
                                    }
                                    // Método para lanzar un error que será capturado automáticamente
                                    throwAutomaticError() {
                                      throw new Error('Este es otro error de prueba para Sentry.:::3.1');
                                    }
  
  login(){
    if(this.loginForm.valid){
      // console.log('llama al servicio');
      // this.loginService.login(this.loginForm.value as LoginRequest);
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData)=>{
          console.log(userData);
                                               Sentry.captureException("Eror::..001 "+userData);          
        },
        error: (errorData)=>{
          console.error(errorData);
          this.loginError=errorData;
                                                Sentry.captureException("Eror::..002 "+errorData);

                                              /* try {
                                                // Simula un error
                                                throw new Error('Este es un error de prueba');
                                              } catch (error) {
                                                const eventId = Sentry.captureException(error);
                                                
                                                // Muestra el diálogo de reporte de error
                                                Sentry.showReportDialog({
                                                  eventId: eventId,  // Pasa el eventId capturado
                                                  title: '¡Se ha producido un error!',
                                                  subtitle: 'Nuestro equipo ha sido notificado.',
                                                  subtitle2: 'Si quieres, puedes proporcionar más información a continuación.',
                                                });
                                              }      
                                              */                                
        },
        complete: ()=>{
          console.info("Login completo");
          this.router.navigateByUrl('/inicio'); // Redirige
          this.loginForm.reset(); //Rsetea el Form
                                               Sentry.captureMessage("Login completo :)p");
                                              
                                              //Capturar Mensajes
                                              // Sentry.captureMessage('Este es un mensaje informativo', 'info');
                                              // Sentry.captureMessage('Este es un mensaje de advertencia', 'warning');
                                              // Sentry.captureMessage('Este es un mensaje de error', 'error');


                                              //Capturar Eventos Manualmente
                                              /*Sentry.captureEvent({
                                                message: 'Evento personalizado.:::.',
                                                level: 'info',  // Puede ser 'info', 'warning', 'error', etc.
                                                extra: { detalle: 'Información adicional sobre el evento' }
                                              });*/




                                              //Registrar Información del Usuario
                                             /* Sentry.setUser({
                                                id: '12345',
                                                email: 'jzapata@gmail.com',
                                                username: 'nombre_usuario'
                                              });
                                              // Luego, captura una excepción o mensaje
                                              Sentry.captureMessage('Enviando información del usuario..');
                                              */

                                             

        }
      });
    }else{
      this.loginForm.markAllAsTouched();//Marca todos los campos
      alert("error al ingresar Datos");
                                              Sentry.captureException("Campos sin ser tocados");
    }
  }


//validando campo email error
 get email(){
    return this.loginForm.controls.email;
  }

//validando campo paswword error
get password(){
  return this.loginForm.controls.password;
}


}
