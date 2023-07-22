export const componentFactory = (node, renderedNodeChildren) => {
  switch (node.component) {
    case "button": {
      return <button key={node.id}>{node.label}</button>;
    }
    case "div": {
      return (
        <div key={node.id} style={{ backgroundColor: node.backgroundColor }}>
          {renderedNodeChildren}
        </div>
      );
    }
    default: {
      throw new Error("Not found");
    }
  }
};

const renderRecursionTree = (treeData) => {
  const renderNode = (node) => {
    if (!!node.children?.length < 1 || "children" in node === false) {
      return componentFactory(node);
    }

    const renderedNodeChildren = node.children.map((currentNodeChild) =>
      renderNode(currentNodeChild)
    );

    return componentFactory(node, renderedNodeChildren);
  };

  return treeData.map((currentNode) => renderNode(currentNode));
};

const renderIterationTree = (treeData) => {
  const stack = [...treeData].reverse();
  const nodeMap = new Map();

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.children) {
      if (node.children.every((child) => nodeMap.has(child.id))) {
        const renderedNodeChildren = node.children.map((child) =>
          nodeMap.get(child.id)
        );
        nodeMap.set(node.id, componentFactory(node, renderedNodeChildren));
      } else {
        stack.push(node);
        stack.push(...node.children.reverse());
      }
    } else {
      nodeMap.set(node.id, componentFactory(node));
    }
  }

  return treeData.map((node) => nodeMap.get(node.id));
};

export const useRenderTree = (treeData, selectedMethod = "recursion") => {
  const methods = {
    recursion: renderRecursionTree,
    iteration: renderIterationTree
  };
  return methods[selectedMethod](treeData);
};
