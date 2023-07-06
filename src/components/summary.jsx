/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Summary({ topic: { first, secondTopic } }) {
  return (
    <div  className="el-section" id="0">
      <ul className="menu min-w-max w-screen h-screen text-3xl text-black">
        <li>
          <a>{ first }</a>
          <ul>
            {
              secondTopic && Object.keys(secondTopic).length > 1 ? (
                <li>
                    <a className="topic-btns">{secondTopic.content}</a>
                </li>
              ) 
              : (
                <li>
                  <a className="topic-btns" id="1">{secondTopic.topic}</a>
                </li>
              )
            }
            <li><a>Painel do gerente</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
