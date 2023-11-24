import { Component } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) {}

  seleccionarAlbum() {
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
  
    this.navCtrl.navigateRoot('/tabs/tab2', { animation: enterAnimation });
  }  

  
}
