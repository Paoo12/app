import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { templateSourceUrl } from '@angular/compiler';



@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalcPage {
    i1: any;
    i2: any;
    i3: any;
    i4: any;
    cidr: any;
    standardClass="";
    ipBin= [];
    mask=this.cidr;
    remMask=(this.mask%8);
    // countMask=Math.ceil(this.mask/8);
     maskBinary="";
    // importantBlockBinary=this.ipBin[this.countMask];
    // netBlockBinary="";
    // bcBlockBinary="";
    // net="";
    // bc="";
    // netBinary="";
    // bcBinary="";
    // maskBinaryBlock="";
    // maskBlock;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, navParams: NavParams) {

 
 
}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  calculate()
  {

    if((this.i1>=0 && this.i1<=255) && (this.i2>=0 && this.i2<=255) && (this.i3>=0 && this.i3<=255) && (this.i4>=0 && this.i4<=255) && (this.cidr>=0 && this.cidr<=32))
      {
        //IP address
       let i1 = this.i1;
       let i2 = this.i2;
       let i3 = this.i3;
       let i4 = this.i4;
      }
      //IP Binary
      this.ipBin[1]=String("00000000."+parseInt(this.i1,10).toString(2)+".").slice(-8);
      this.ipBin[2]=String("00000000"+parseInt(this.i2,10).toString(2)+".").slice(-8);
      this.ipBin[3]=String("00000000"+parseInt(this.i3,10).toString(2)+".").slice(-8);
      this.ipBin[4]=String("00000000"+parseInt(this.i4,10).toString(2)).slice(-8);
      
   

      //Class
      if(this.i1<=126) 
      {
      this.standardClass="A";
      }
      else if (this.i1==127) 
      {
        this.standardClass="loopback IP"
      }
      else if ((this.i1>=128) && (this.i1<=191)) 
      {
        this.standardClass="B";
      }
      else if ((this.i1>=192) && (this.i1<=223))
      {
        this.standardClass="C";
      }
      else if ((this.i1>=224) && (this.i1<=239)) 
      {
        this.standardClass="D (Multicast Address)";
      }
      else if ((this.i1>=225) && (this.i1<=240))
      {
        this.standardClass="E (Experimental)";
      }
      else {
        this.standardClass="Out of range";
      }


      //subnet
    if(this.cidr==1)
      {
         this.mask = "128.0.0.0";
         this.maskBinary = "10000000.00000000.00000000.00000000";
      }
     if(this.cidr==2)
     {
        this.mask = "192.0.0.0";
        this.maskBinary = "11000000.00000000.00000000.00000000";
     }
     if(this.cidr==3)
     {
        this.mask = "224.0.0.0";
        this.maskBinary = "11100000.00000000.00000000.00000000";
     }
     if(this.cidr==4)
     {
        this.mask = "240.0.0.0";
        this.maskBinary = "11110000.00000000.00000000.00000000";
     }
     if(this.cidr==5)
     {
        this.mask = "248.0.0.0";
        this.maskBinary = "11111000.00000000.00000000.00000000";
     }
     if(this.cidr==6)
     {
        this.mask = "252.0.0.0";
        this.maskBinary = "11111100.00000000.00000000.00000000";
     }
     if(this.cidr==7)
     {
        this.mask = "254.0.0.0";
        this.maskBinary = "11111110.00000000.00000000.00000000";
     }
     if(this.cidr==8)
     {
        this.mask = "255.0.0.0";
        this.maskBinary = "11111111.00000000.00000000.00000000";
     }
      if(this.cidr==9)
     {
        this.mask = "255.128.0.0";
        this.maskBinary = "11111111.10000000.00000000.00000000";
     }
    if(this.cidr==10)
    {
       this.mask = "255.192.0.0";
       this.maskBinary = "11111111.11000000.00000000.00000000";
    }
    if(this.cidr==11)
    {
       this.mask = "255.224.0.0";
       this.maskBinary = "11111111.11100000.00000000.00000000";
    }
    if(this.cidr==12)
    {
       this.mask = "225.240.0.0";
       this.maskBinary = "11111111.11110000.00000000.00000000";
    }
    if(this.cidr==13)
    {
       this.mask = "255.248.0.0";
       this.maskBinary = "11111111.11111000.00000000.00000000";
    }
    if(this.cidr==14)
    {
       this.mask = "255.252.0.0";
       this.maskBinary = "11111111.11111100.00000000.00000000";
    }
    if(this.cidr==15)
    {
       this.mask = "255.254.0.0";
       this.maskBinary = "11111111.11111110.00000000.00000000";
    }
    if(this.cidr==16)
    {
       this.mask = "255.255.0.0";
       this.maskBinary = "11111111.11111111.00000000.00000000";
    }

    if(this.cidr==17)
    {
       this.mask = "255.255.128.0";
       this.maskBinary = "11111111.11111111.10000000.00000000";
    }
   if(this.cidr==18)
   {
      this.mask = "255.255.192.0";
      this.maskBinary = "11111111.11111111.11000000.00000000";
   }
   if(this.cidr==19)
   {
      this.mask = "255.255.224.0";
      this.maskBinary = "11111111.11111111.11100000.00000000";
   }
   if(this.cidr==20)
   {
      this.mask = "255.255.240.0";
      this.maskBinary = "11111111.11111111.11110000.00000000";
   }
   if(this.cidr==21)
   {
      this.mask = "255.255.248.0";
      this.maskBinary = "11111111.11111111.11111000.00000000";
   }
   if(this.cidr==22)
   {
      this.mask = "255.255.252.0";
      this.maskBinary = "11111111.11111111.11111100.00000000";
   }
   if(this.cidr==23)
   {
      this.mask = "255.255.254.0";
      this.maskBinary = "11111111.11111111.11111110.00000000";
   }
   if(this.cidr==24)
   {
      this.mask = "255.255.255.0";
      this.maskBinary = "11111111.11111111.11111111.00000000";
   }
   if(this.cidr==25)
   {
      this.mask = "255.255.255.128";
      this.maskBinary = "11111111.11111111.11111111.10000000";
   }
  if(this.cidr==26)
  {
     this.mask = "255.255.255.192";
     this.maskBinary = "11111111.11111111.11111111.11000000";
  }
  if(this.cidr==27)
  {
     this.mask = "255.255.255.224";
     this.maskBinary = "11111111.11111111.11111111.11100000";
  }
  if(this.cidr==28)
  {
     this.mask = "255.255.255.240";
     this.maskBinary = "11111111.11111111.11111111.11110000";
  }
  if(this.cidr==29)
  {
     this.mask = "255.255.255.248";
     this.maskBinary = "11111111.11111111.11111111.11111000";
  }
  if(this.cidr==30)
  {
     this.mask = "255.255.255.252";
     this.maskBinary = "11111111.11111111.11111111.11111100";
  }
  if(this.cidr==31)
  {
     this.mask = "255.255.255.254";
     this.maskBinary = "11111111.11111111.11111111.11111110";
  }
  if(this.cidr==32)
  {
     this.mask = "255.255.255.255";
     this.maskBinary = "11111111.11111111.11111111.11111111";;
  }

  if(this.cidr>32)
  this.mask="Out of Range";


 
}
  

}

