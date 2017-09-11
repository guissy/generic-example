import * as React from 'react';
// 泛型用于解释层级结构关系 Array<number>
// 父<泛型>   父<占位符>   父<变量>  牛<尾巴>
// 子<实体>   子<具体类>   子<赋值>  鲁迅<郭沫若>
class Cow<Tail> extends React.PureComponent<CowProps> {
  constructor(props: CowProps) {
    super(props);
  }

  getTail(): Tail {
    return this.props.tail;
  }

  public render() {
    return (
      <div style={{fontSize: 18, padding: '20px 0' }}>
        <p>
          <label>牛: </label>
          <label>{this.toString()}</label>
        </p>
        <p>
          <label>牛尾巴: </label>
          <label>{this.getTail().toString()}</label>
        </p>
      </div>
    );
  }
}

export class LuXun extends Cow<GuoMoRuo> {
  name = '鲁迅';
  toString() {
    return this.name;
  }
}

export class GuoMoRuo {
  name = '郭沫若';
  toString() {
    return this.name;
  }
}

interface CowProps {
  tail: any;
}

