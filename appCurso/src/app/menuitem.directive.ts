import { Directive , HostListener, HostBinding} from '@angular/core';


export class MenuitemDirective {

  @HostBinding ('class.itemOrange')
  private mostrar = false;

   @HostListener('mouseover') onOver() {
   this.mostrar = true;
   }
   @HostListener('mouseout') onOut() {
   this.mostrar = false;
  }
}
