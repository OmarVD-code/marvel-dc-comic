import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number = 0;
  @Input() prueba:string="";

  @Output() heroeSelect: EventEmitter<number>;


  constructor(private router:Router) {
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroes/heroe',this.index]);
    console.log(this.prueba);
    // this.heroeSelect.emit(this.index);
  }
}
