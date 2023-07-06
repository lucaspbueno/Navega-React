import data from '../database.js'
import Summary from './summary';

export default function Article() {
  return (
    <article className="bg-white w-full p-8 flex">
      <div className="text-6xl text-black">
        <h1>Gestão</h1>
        <ul className="menu min-w-max text-4xl text-zinc-700">
          {
            data.gestao.map((el, index) => (
              <Summary key={ index } topic={ el }/>
            ))
          }
        </ul>
      </div>
      <div className="text-6xl text-black ml-96">
        <h1>Corporativo</h1>
        <ul className="menu min-w-max text-4xl text-zinc-700">
          {
            data.corporativo.map((el, index) => (
              <Summary key={ index } topic={ el }/>
            ))
          }
        </ul>
      </div>
      
      {/* <section className="el-section not-show text-black" id="1">
        <h1>Atendimentos criados</h1>
        <p>Considera a data de registro do atendimento (data em que entrou no Sistema)</p>
        <h1>Atendimentos Concluídos</h1>
        <p>Considera a data em que o atendimento foi encerrado / concluído (data última ocorrência)</p>
        <h1>Detalhamento</h1>
        <p>Considera os atendimentos dentro do período informado, criados ou encerrados, dependendo do item selecionado
        </p>
      </section>
      <section className="el-section not-show" id="0">
        <p>Considera a data em que o atendimento foi encerrado / concluído (data última ocorrência)</p>
        <h1>Detalhamento</h1>
        <p>Considera os atendimentos dentro do período informado, criados ou encerrados, dependendo do item selecionado
        </p>
        <p>Considera os atendimentos dentro do período informado, criados ou encerrados, dependendo do item selecionado
        </p>
      </section> */}
    </article>
  );
}
