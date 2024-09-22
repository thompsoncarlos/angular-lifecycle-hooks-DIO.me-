// Importar as Interfaces: De Componentes e do Ciclo de Vida dos Ganchos(Hooks)
import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnChanges
} from '@angular/core';

// Utilização do decorator @Component da interface Component
@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})

// Exportar o Componente para ser utilizado por outros componentes
// Como foram utilizadas interfaces é preciso implementar seus métodos
export class CheckSampleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
{

  // Propriedade quantidade definida para verificar os hooks.
  quantidade:number = 0;

  // métodos definidos para serem utilizados como eventos de alteração e verificação
  incrementar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -= 1;
  }

  // Como toda classe há sempre um construtor padrão
  constructor() {
    console.log("Construtor");
   }

  ngOnInit(): void {
    console.log("Inicialização: ngOnInit")
  }

  // Só influencia quando a propriedade do componente é utilizado no componente Pai
  ngOnChanges(): void {
    console.log("Alteração: ngOnChanges");
  }

  // Sempre que acontece alguma alteração é que ocorre o evento Check
  // Checked -> Content -> View
  // Primeiro precisa internamente verificar o conteúdo para depois visualizar.

  ngDoCheck():void {
    console.log("Verificação: ngDoCheck")
  }


  // Qunado o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log("Conteúdo Depois de Iniciado: ngAfterContentInit");
  }

  // Depois da inicialização da view
  ngAfterViewInit(): void {
      console.log("Visualização Depois de Incializada: ngAfterViewInit");
  }

  // Após alguma alteração verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("Conteúdo Depois de Verificado: ngAfterContentChecked");
  }

  // Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
      console.log("Visualização Depois de Verificada: ngAfterViewChecked");
  }


}
