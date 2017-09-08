import * as React from 'react';
import { Layout } from 'antd';
import { LuXun, GuoMoRuo } from './Cow';
import './App.css';
import { Love2, LiuLang, ZhiNv } from './Love2';
import { Love3, JingJing, ZhiZunBao, ZiXia } from './Love3';

class App extends React.Component {
  render() {
    return (
      <Layout className="App">
        <Layout.Header>

        </Layout.Header>
        <Layout.Content>
          <LuXun tail={new GuoMoRuo()} />
          <Love2 boy={new LiuLang()} girl={new ZhiNv()} />
          <Love3 boy={new ZhiZunBao()} girl1={new ZiXia()} girl2={new JingJing()}/>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;