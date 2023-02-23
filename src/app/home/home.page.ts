import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  salarioliq = 0;
  resultado = 0;
  resultado2 = 0;
  faltas = 0;
  txir = 0;
  hrex = 0;
  threx = 0;

  calcir(formu: { value: { sal: any; }; }) {
    let sal = formu.value.sal;
    ''
    if (sal <= 2000) {
      this.txir = 0;
    } else if (2001 <= sal && sal <= 5000) {
      this.txir = 10;
    } else {
      this.txir = 20;
    }

    this.resultado = parseFloat(sal) * this.txir / 100;
  }

  calcinss(formu: { value: { sal: any; }; }) {
    let sal = formu.value.sal;

    this.resultado2 = parseFloat(sal) * 12 / 100;
  }

  calcfal(formu: { value: { sal: any; fal: any; }; }) {
    let sal = formu.value.sal;
    let fal = formu.value.fal;

    this.faltas = parseFloat(sal) / 30 * fal;
  }

  calcher(formu: { value: { sal: any; hex: any; }; }) {
    let sal = formu.value.sal;
    let hrex = formu.value.hex;

    this.threx = parseFloat(sal) / 30 / 8 * hrex;
  }

  descon(formu: { value: any; }) {
    let sal = formu.value.sal;

    this.calcir(formu);
    this.calcinss(formu);
    this.calcfal(formu);
    this.calcher(formu);
    this.salarioliq = sal - this.resultado - this.resultado2 - this.faltas + this.threx;

  }

}
