import * as React from 'react';

// 妹妹说：啊，大海，我的母亲
// 哥哥说：啊，大海，我的岳母

export default class Sea<Me, MyLove> extends React.PureComponent<SeaProps, any> {
  name = "大海";
  constructor(props: SeaProps) {
    super(props);
  }
  getUser(): Me {
    return this.props.me;
  }
  getMyLove(): MyLove {
    return this.props.myLove;
  }
  getAll(): {me: Me, myLove: MyLove} {
    return {
      me: this.props.me,
      myLove: this.props.myLove,
    }
  }
  getMap(): Map<Me, MyLove> {
    return new Map<Me, MyLove>([[this.props.me, this.props.myLove]]);
  }

  getList(): Me[] | MyLove[] {
    return [this.props.me, this.props.myLove]
  }

  public render() {
    return (
      <div>
        {this.props.me.toString()} 说：啊，{this.name}，我的{this.getMyLove().toString()}
      </div>
    );
  }
}

export class Boy {
  name = '哥哥';
  toString() {
    return this.name;
  }
}
export class Girl {
  name = '妹妹';
  toString() {
    return this.name;
  }
}
export class Mother {
  name = '母亲';
  toString() {
    return this.name;
  }
}
export class MotherInRow {
  name = '岳母';
  toString() {
    return this.name;
  }
}

interface SeaProps {
  me: any;
  myLove: any;
}
