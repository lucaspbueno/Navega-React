import data from '../database';
import Topic from './Topic';
import { useHistory } from 'react-router-dom';

export default function TopicsGestao({ filterText }) {
  const history = useHistory();

  const handleClick = ({ target }) => {
    if (history.location.pathname === `/documentação/${target.textContent}`) {
      history.replace('/');
    } else {
      history.replace('/');
      history.push(`/documentação/${target.textContent}`)
    }
  };
  return (
    <li>
      <details>
        <summary className="topic-btns first-topic" onClick={ (e) => handleClick(e) }>Gestão</summary>
        <ul>
          {data.gestao
            .filter(
              (el) =>
                el.first.toLowerCase().includes(filterText?.toLowerCase() || '') ||
                (el.secondTopic && el.secondTopic.topic.toLowerCase().includes(filterText?.toLowerCase() || ''))
            )
            .map((el, index) => (
              <Topic key={index} topic={el} filter={ filterText } type="Gestão"/>
            ))}
        </ul>
      </details>
    </li>
  );
}
