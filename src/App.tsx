import * as React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import { store } from "./redux/store";

import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: "40px" }}>
          <Counter />
        </Content>
        <Footer></Footer>
      </Layout>
    </Provider>
  );
};

export default App;
