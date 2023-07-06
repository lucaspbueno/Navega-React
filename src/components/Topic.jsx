import { useHistory } from 'react-router-dom';

export default function Topic({ topic: { first, secondTopic } }) {
  const history = useHistory();

  const handleClick = ({ target }) => {
    history.push(`${history.location.pathname}/${target.textContent}`);
  };

  return (
    <li>
      <details>
        <summary className="topic-btns" onClick={ (e) => handleClick(e) }>{first}</summary>
        <ul>
          {secondTopic && Object.keys(secondTopic).length > 1 ? (
            <li>
              <details>
                <summary className="topic-btns" onClick={ (e) => handleClick(e) }>{secondTopic.topic}</summary>
                <ul>
                  <li>
                    <a className="topic-btns" onClick={ (e) => handleClick(e) }>{secondTopic.content}</a>
                  </li>
                </ul>
              </details>
            </li>
          ) 
          : (
            <li>
              <a className="topic-btns" id="1" onClick={ (e) => handleClick(e) }>{secondTopic.topic}</a>
            </li>
          )}
        </ul>
      </details>
    </li>
  );
}
