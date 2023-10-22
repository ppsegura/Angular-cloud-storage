import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{

  img = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);
    //codigo

  }
  imageDefault='https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg';

  // counter = 0;
  // counterFn: number | undefined;

  @Output() loaded = new EventEmitter<string>();

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

  constructor(){
    // corre antes del render
    // No corre cosas asincronas, corre solo una vez
    console.log('constructor','imgValue =>',this.img);
  }

  ngOnChanges(){
    // corre antes del render y durante
    // changes inputs -- times
    console.log('ngOnChanges','imgValue =>',this.img);
  }

  ngOnInit(): void{
    // corre antes del render
    // async - fetch, llamadas a un API -- once time
    console.log('ngOnInit','imgValue =>',this.img);
    // this.counterFn = window.setInterval(() =>{
    //   this.counter ++;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    //after render
    //Se manejan los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

}
