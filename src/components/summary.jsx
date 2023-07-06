/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Summary({ topic: { first, secondTopic } }) {
  return (
    <li>
      <a>{ first }</a>
      <ul>
        {
          secondTopic && Object.keys(secondTopic).length > 1 ? (
            <li>
              <ul>
                <a className="topic-btns">{secondTopic.topic}</a>
                <li>
                  <a className="topic-btns" id="1">{secondTopic.content}</a>
                </li>
              </ul>
            </li>
          ) 
          : (
            <li>
              <a className="topic-btns" id="1">{secondTopic.topic}</a>
            </li>
          )
        }
      </ul>
    </li>
  );
}
