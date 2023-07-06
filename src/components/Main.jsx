import Article from "./Article";
import Aside from "./Aside";

export default function Main() {
  return (
    <main className="flex w-screen h-screen">
      <Aside />
      <Article />
  </main>
  );
}
