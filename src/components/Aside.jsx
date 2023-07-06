import { useState } from "react";
import TopicsGestao from "./TopicsGestao.jsx";
import TopicsCorporativo from "./TopicsCorporativo.jsx";

export default function Aside() {
  const [filter, setFilter] = useState('');
  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  }
  return (
    <aside className="p-8 bg-zinc-700 h-screen text-white">
      <input
        type="text"
        name="filter"
        value={ filter }
        onChange={ handleChange }
        className="bg-zinc-700 w-full text-3xl p-5 border-2 border-black rounded-md mb-4"
        id="input-filter"
        placeholder="Filter"
      />
      <ul className="menu text-3xl scroll overflow-y-auto">
        <TopicsGestao filterText={ filter } />
        <TopicsCorporativo filterText={ filter } />
      </ul>
    </aside>
  );
}
