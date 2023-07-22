export const treeData = [
  {
    id: 1,
    component: "div",
    backgroundColor: "yellow",
    children: [
      {
        id: 2,
        component: "button",
        label: "inner button id 2"
      },
      {
        id: 3,
        component: "button",
        label: "inner button id 3"
      }
    ]
  },
  {
    id: 4,
    component: "button",
    label: "outside button id 4"
  },
  {
    id: 5,
    component: "div",
    backgroundColor: "green",
    children: [
      {
        id: 6,
        component: "div",
        backgroundColor: "blue",
        children: [
          {
            id: 7,
            component: "div",
            backgroundColor: "grey",
            children: [
              {
                id: 8,
                component: "button",
                label: "innder button id 8"
              }
            ]
          }
        ]
      }
    ]
  }
];
