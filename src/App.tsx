import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="Nlw expert notes" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas ..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard
          pastTime="há 2 dias"
          describe="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where...
          
          Para configurar o plugin, é preciso instalar como abaixo:"
        />
        <NoteCard
          pastTime="há 4 dias"
          describe="No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade.

          Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio."
        />
        <NoteCard
          pastTime="há 7 dias"
          describe="Podemos utilizar o pacote chalk para exibir logs no código coloridos para dar um efeito mais legal no terminal.
          
          Podemos trocar tanto a cor do texto quanto a cor de fundo do texto impresso no console."
        />
      </div>
    </div>
  );
}

export default App;
