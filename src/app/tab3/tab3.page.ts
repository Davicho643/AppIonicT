import { Component } from '@angular/core';
import { MotionService } from '../service/motion.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  x: number;
  y: number;
  z: number;
  constructor(private motion: MotionService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
  }

  public async aceleracion(){
    this.getmotion();
    }

    getmotion()
    {
       this.motion.movimientoAceleracion().then(()=>{
        this.x=this.motion.x;
        this.y=this.motion.y;
        this.z=this.motion.z;
      });
    }

}
