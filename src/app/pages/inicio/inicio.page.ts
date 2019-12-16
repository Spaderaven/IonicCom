import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action-Sheet',
      rederectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      rederectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      rederectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y Router',
      rederectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Card',
      rederectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      rederectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      rederectTo: '/date-time'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}


interface Componente {
  icon: string;
  name: string;
  rederectTo: string;
}