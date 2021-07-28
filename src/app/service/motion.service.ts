import { Injectable } from '@angular/core';
import { Motion } from '@capacitor/motion';

@Injectable({
  providedIn: 'root'
})
export class MotionService {

  x: number;
  y: number;
  z: number;

  constructor() { }
  async movimientoAceleracion(){
    try {
      await Motion.addListener('accel', event => {
        this.x = event.acceleration.x;
        this.y = event.acceleration.y;
        this.z = event.acceleration.z;
        console.log(event);
      });
    }catch (e) {
      return;
    }
  }
}
