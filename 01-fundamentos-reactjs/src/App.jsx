import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Abraão Borges"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem illo perferendis excepturi sed, quod accusamus autem dolore corrupti illum tempora totam aperiam pariatur ducimus sint quasi voluptatem! Optio, corrupti accusamus?"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
