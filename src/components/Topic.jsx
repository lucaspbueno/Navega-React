import { useHistory } from 'react-router-dom';

export default function Topic({ topic: { first, secondTopic }, type}) {
  const history = useHistory();

  /* const handleClick = ({ target }) => {
    history.push(`${history.location.pathname}/${target.textContent}`);
  }; */

  const handleClickFirst = ({ target }) => {
    if (type === 'Corporativo') {
      if (history.location.pathname === `/documentação/Corporativo/${target.textContent}`) {
        history.replace('/documentação/Corporativo');
      } else {
        history.push(`/documentação/Corporativo/${target.textContent}`);
      }
    } else {
      if (history.location.pathname === `/documentação/Gestão/${target.textContent}`) {
        history.replace('/documentação/Gestão');
      } else {
        history.push(`/documentação/Gestão/${target.textContent}`);
      }
    }
  };

  const handleClickContent = ({ target }) => {
    console.log(target);
    if (type === 'Corporativo') {
      const currentUrl = `${history.location.pathname}/${target.textContent}`;
      if (!history.location.pathname === currentUrl) {
        console.log('entrou');
        const url = history.location.pathname.replace(/\/Usuários/g, '');
        history.push(url);
      } else {
        history.push(`${history.location.pathname}/${target.textContent}`);
        console.log('embaixo', history.location.pathname);
      }
    }
  }

  const handleClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    const url = event.target.getAttribute("href"); // Obtém a URL do atributo href do link

    // Atualiza a URL sem recarregar a página
    window.history.pushState(null, "", url);

    // Coloque o código adicional que deseja executar após a atualização da URL
  }

  return (
    <li>
      <details>
        <summary className="topic-btns mt-8" onClick={ (e) => handleClickFirst(e) }>{first}</summary>
        <ul>
          {secondTopic && Object.keys(secondTopic).length > 1 ? (
            <li>
              <details>
                <summary className="topic-btns" onClick={ (e) => handleClickContent(e) }>{secondTopic.topic}</summary>
                <ul>
                  <li>
                    <a href={`/documentação/${type}/${first}/${secondTopic.topic}/${secondTopic.content}`} className="topic-btns" onClick={ (e) => handleClick(e) }>{secondTopic.content}</a>
                  </li>
                </ul>
              </details>
            </li>
          ) 
          : (
            <li>
              <a href={ `/documentação/${type}/${first}/${secondTopic.topic}` } className="topic-btns" id="1" onClick={ (e) => handleClick(e) }>{secondTopic.topic}</a>
            </li>
          )}
        </ul>
      </details>
    </li>
  );
}
