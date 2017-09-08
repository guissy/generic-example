import * as React from 'react';

// 泛型用于解释层级结构关系 Array<number>
// 爱情<男方，女方>
class Love<Boy, Girl> extends React.PureComponent<LoveProps> {
  constructor(props: LoveProps) {
    super(props);
  }

  getBoy(): Boy {
    return this.props.boy;
  }

  getGirl(): Girl {
    return this.props.girl;
  }

  public render() {
    return (
      <div style={{fontSize: 18, padding: '20px 0' }}>
        <p>
          <label>牛: </label>
          <label>{this.toString()}</label>
        </p>
        <p>
          <label>男方: </label>
          <label>{this.getBoy().toString()}</label>
        </p>
        <p>
          <label>女方: </label>
          <label>{this.getGirl().toString()}</label>
        </p>
      </div>
    );
  }
}

export class Love2 extends Love<LiuLang, ZhiNv> {
  name = '民间故事';
  toString() {
    return this.name;
  }
}

export class LiuLang {
  name = '牛郎';
  toString() {
    return this.name;
  }
}
export class ZhiNv {
  name = '织女';
  toString() {
    return this.name;
  }
}


interface LoveProps {
  boy: any;
  girl: any;
}
