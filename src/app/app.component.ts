import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent{
  pantalla = "";

  actualizarPantalla(valor: string){
    this.pantalla = this.pantalla + valor;
  }

  limpiarPantalla(){
    this.pantalla = "";
  }

  evaluarExpresion(){
    try {
      this.pantalla = eval(this.pantalla);
    } catch (error) {
      this.pantalla = "ERROR";
    }
  }

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent){
    const teclaPresionada = event.key;

    if (/[0-9+\-*/.=]/.test(teclaPresionada)) {
      event.preventDefault();
      this.actualizarPantalla(teclaPresionada);
    } else if (teclaPresionada.toLowerCase() === "c") {
      event.preventDefault();
      this.limpiarPantalla();
    } else if (teclaPresionada === "Enter") {
      event.preventDefault();
      this.evaluarExpresion();
    }
  }

  teclaPresionada(event: Event){
    
    if (event.target instanceof HTMLButtonElement) {

      let textoTecla = event.target.textContent || "";

      if (textoTecla === "C"){
        this.limpiarPantalla();
      } else if (textoTecla === "="){
        this.evaluarExpresion();
      } else {
        this.actualizarPantalla(textoTecla);
      }
    }
  }
}
