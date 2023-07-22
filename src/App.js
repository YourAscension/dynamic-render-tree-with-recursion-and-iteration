import { useRenderTree } from "./hooks/use-render-tree";
import { treeData } from "./data";
import "./styles.css";

export default function App() {
  const treeWithRecursion = useRenderTree(treeData, "recursion");
  const treeWithIteration = useRenderTree(treeData, "recursion");

  return (
    <ul>
      <h1>2 ways to dynamically render a component tree</h1>
      <li>
        <h2>Recursion:</h2>
        {treeWithRecursion}
      </li>
      <li>
        <h2>Iteration:</h2>
        {treeWithIteration}
      </li>
    </ul>
  );
}
