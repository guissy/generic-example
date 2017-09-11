import * as React from 'react';

// 泛型用于解释多角关系
// 爱情<男一号，女一号，女二号>
class Love<Boy, Girl1, Girl2> extends React.PureComponent<LoveProps> {
  constructor(props: LoveProps) {
    super(props);
  }

  getBoy(): Boy {
    return this.props.boy;
  }

  getGirl1(): Girl1 {
    return this.props.girl1;
  }
  getGirl2(): Girl2 {
    return this.props.girl2;
  }

  public render() {
    return (
      <div style={{fontSize: 18, padding: '20px 0' }}>
        <p>
          <label>{this.toString()}</label>
        </p>
        <p>
          <label>男一号: </label>
          <label>{this.getBoy().toString()}</label>
        </p>
        <p>
          <label>女一号: </label>
          <label>{this.getGirl1().toString()}</label>
        </p>
        <p>
          <label>女二号: </label>
          <label>{this.getGirl2().toString()}</label>
        </p>
      </div>
    );
  }
}

export class Love3 extends Love<ZhiZunBao, ZiXia, JingJing> {
  name = '神话故事';
  toString() {
    return this.name;
  }
}

export class ZhiZunBao {
  name = '至尊宝';
  toString() {
    return this.name;
  }
}
export class ZiXia {
  name = '紫霞';
  toString() {
    return this.name;
  }
}
export class JingJing {
  name = '晶晶';
  toString() {
    return this.name;
  }
}


interface LoveProps {
  boy: any;
  girl1: any;
  girl2: any;
}
