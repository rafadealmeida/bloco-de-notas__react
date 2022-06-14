import {ListaDeNotas} from "./componente/Lista de Notas"

function App() {
  return (
  
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota ..."></textarea>
        <button>Cria sua Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
