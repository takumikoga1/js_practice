// 課題3: 関数の定義パターンと this の挙動、高階関数の使い方
// 事前に「4.1 関数の基本」を読んでから取り組んでください。

// === PART 1: 関数定義の違いと this の挙動 ===
// オブジェクト `calculator` に 3 種類の add メソッドを実装し、this がどう振る舞うかを確認してください。

const calculator = {
  value: 0,

  // TODO: 関数式を使って add1 を定義し、this.value に n を加算して結果を出力する
  add1: function(n) {
    const newValue = this.value + n;
    console.log(newValue);
  },

  // TODO: メソッド省略記法（関数宣言スタイル）を使って add2 を定義し、同様の処理を実装する
  add2(n) {
    const newValue2 = this.value + n;
    console.log(newValue2);
  },

  // TODO: アロー関数を使って add3 を定義してみる（this の動きに注意）
  add3: (n) => {
    const newValue3 = calculator.value + n;
    console.log(newValue3)
  },
};

// TODO: 以下を順に実行し、結果と this の動作の違いを確認してください
calculator.add1(10);
calculator.add2(20);
calculator.add3(30);

// === PART 2: 高階関数の実装 ===
// 関数を引数に取り、その関数の実行時間（ミリ秒）を測定して表示する `measureTime` 関数を定義してください。

// TODO: measureTime を実装
function measureTime(fn) {
  // 実行前の時刻を取得
  const startTime = Date.now();
  // 関数 fn を実行
  const result = fn();
  // 実行後の時刻を取得
  const endTime = Date.now();
  // 実行時間をコンソールに出力
  const sumTime = endTime - startTime;
  console.log(sumTime);
  // 結果を return
  return result;
}

// TODO: 以下のように使って、実行時間を計測してみてください
measureTime(() => {
  let sum = 0;
  for (let i = 0; i < 1_000_000; i++) {
    sum += i;
  }
  return sum;
});
