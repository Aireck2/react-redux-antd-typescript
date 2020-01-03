import * as React from "react";
// import { Button, Icon } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { Button, Icon } from "antd";

// const Counter: React.FC = () => {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <h2>{count}</h2>
//       <div>
//         <Button onClick={() => setCount(count - 1)}>
//           <Icon type="down" />
//         </Button>
//         <Button onClick={() => setCount(count + 1)}>
//           <Icon type="up" />
//         </Button>
//       </div>
//     </div>
//   );
// };
const App: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  return <div>Hello {name}</div>;
};

export default App;
