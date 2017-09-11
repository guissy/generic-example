// http://v.youku.com/v_show/id_XMTc1MjEzMjY1Mg==.html?spm=a2hzp.8244740.uerCenter.5!2~5~5!2~5~DL~DD~A
// curry 柯里化
// 示意形状：y = f(x1)(x2)
// function形状： function(){ return function(){} }
// 箭头形状： () => () => value;

function makeAdjectifier(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}

const makeAdjectifier = (adjective) => (string) => adjective + " " + string;

var coolifier = makeAdjectifier("cool")
coolifier("conference");
