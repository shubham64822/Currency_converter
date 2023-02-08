import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  
  usd=1.126735;
  gbp=0.876893;
  inr=79.677056;
  transform(value: number, ...args: string[]): any {
    const [from,to]=args;//
    if(from==="USD")
    {
      if(to==="INR")
        return (value / this.usd)*this.inr;
      else if(to==="POUNDS")
        return (value / this.usd)*this.gbp;
      else
        return value * 1;
    }
    else if(from==="POUNDS")
    {
      if(to==="INR")
        return (value / this.gbp)*this.inr;
      else if(to==="USD")
        return (value / this.gbp)*this.usd;
      else
        return value * 1;
    }
    else if(from==="INR")
    {
      if(to==="GBP")
        return (value / this.inr)*this.gbp;
      else if(to==="USD")
        return (value / this.inr)*this.usd;
      else
        return value * 1;
    }

  }

}

