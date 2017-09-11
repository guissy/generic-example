import { connect } from 'dva';
import * as React from 'react';
import { Dispatch } from 'redux';

// tslint:disable-next-line
const User: React.SFC<any> = ({ dispatch }) => {
  return (
      <div>
        User works!
      </div>
  );
};

// 异步，开始只执行一次，精确控制哪些部分需要更新
export default class User extends React.PureComponent<any, any> {

  public render() {
    return (
      <div>User Works!</div>
    );
  }
}

