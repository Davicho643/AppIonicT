import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  items ={
    key: '',
    value: ''
  };

  key: string;
  value: string;
  ver: any;
  constructor() { }

  ngOnInit() {
  }
  saveStorage() {
    Storage.set({
      key:this.key,
      value:this.value
    }).then(()=>{
      alert('Storage guardado con Exito');
    });
  }

  getStorage(){
    Storage.get({
      key:this.key
    }).then((value)=>{
      alert('Valor de Llave' + this.key + 'es: ' + value.value);
    });
  }

  removeStorage(){
    Storage.remove({
      key:this.key
    }).then(()=>{
      alert('Valor de Llave' + this.key + 'fue borrado: ');
    });
  }

}
