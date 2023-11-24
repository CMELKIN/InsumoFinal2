import { Component, OnInit } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController ) {}

  
  goback() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0', 'var(--backdrop-opacity)');
  
      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .beforeStyles({ 'opacity': 1 })
        .fromTo('translateY', '100%', '0%');
  
      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };
  
    this.navCtrl.navigateRoot('/tabs/tab1', { animation: enterAnimation });

  } 

  progress: number = 0;
  currentTime: string = '0:00';
  totalTime: string = '3:30';
  isPlaying: boolean = false;

  // Función para manejar el cambio de reproducción/pausa
  togglePlay() {
    this.isPlaying = !this.isPlaying;
    // Lógica para reproducir o pausar la canción aquí
  }
  goBack2() {
    console.log('Going back...');
  }

  // Función para manejar la navegación hacia adelante
  goForward() {
    console.log('/tabs/tab4');
  }
  

}
