import data from '../database';
import Topic from './Topic';
import { useHistory } from 'react-router-dom';

export default function TopicsCorporativo({ filterText }) {
  const history = useHistory();

  const handleClick = ({ target }) => {
    history.replace('/');
    history.push(target.textContent)
  };
  return (
    <li>
    <details>
      <summary className="topic-btns first-topic" onClick={ (e) => handleClick(e) }>Corporativo</summary>
      <ul>
          {data.corporativo
            .filter(
              (el) =>
                el.first.toLowerCase().includes(filterText?.toLowerCase() || '') ||
                (el.secondTopic &&
                  (el.secondTopic.topic.toLowerCase().includes(filterText?.toLowerCase() || '') ||
                    el.secondTopic.content.toLowerCase().includes(filterText?.toLowerCase() || '')))
            )
            .map((el, index) => (
              <Topic key={index} topic={el} filter={ filterText } />
            ))}
        </ul>
    </details>
  </li>
  );
}
