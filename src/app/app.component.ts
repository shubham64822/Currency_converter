import { Component } from '@angular/core';
import { CurrencyApiService } from './currency-api.service';
import {ConvertPipe} from './pipes/convert.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency_convertor';
  curr: any = [];
  val: number = 0;

  base = 'INR';
  con = 'INR';
  res: number = 1;
  out: number = 1;





  changebase(a: string) {
    this.base = a;
  }

  toCountry(b: string) {
    this.con = b;
  }

  amount_in(c: string) {
    this.val=Number(c);
    this.out = this.val;
  }
  constructor(private currency: CurrencyApiService) {}

  convert() {
    console.warn(this.base);
    console.warn(this.con);
    console.warn(this.out);
    var result;
    let CoPi= new ConvertPipe();
    this.res=CoPi.transform(this.out,this.base,this.con);

/*
    this.currency.getCurrencyData(this.base).subscribe((data) => {
      this.curr = JSON.stringify(data);
      this.curr = JSON.parse(this.curr);
      if (this.con == 'USD') {
        this.res = this.curr.rates.USD;
        result = parseFloat(this.res) * parseFloat(this.out);
        this.res = result.toString();
      }
      if (this.con == 'INR') {
        this.res = this.curr.rates.INR;
        result = parseFloat(this.res) * parseFloat(this.out);
        this.res = result.toString();
      }
      if (this.con == 'EUR') {
        this.res = this.curr.rates.EUR;
        result = parseFloat(this.res) * parseFloat(this.out);
        this.res = result.toString();
      }
    });*/

  }
}
