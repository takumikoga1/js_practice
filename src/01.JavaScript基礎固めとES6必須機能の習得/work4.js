// 課題4: 実務的な関数の活用
// 事前に「4.5 ES2015の引数（デフォルト値・分割代入）」を読んでから取り組んでください。

// === 課題概要 ===
// フロントエンドのAPI処理を想定した関数を実装してください。
// fetch を使ったデータ取得や、ユーティリティ関数によるデータ整形がテーマです。

// TODO 1: エラーハンドリングを含むデータ取得関数 fetchUserData を実装してください。
// 要件：
// - 第1引数に userId を取り、https://api.example.com/users/{userId} にアクセスします。
// - 第2引数 options には headers や timeout(ms) を指定できるようにしてください。
// - fetch でエラーが発生した場合には console.error を表示してください。
// - デフォルト引数と分割代入を使用して実装してください。
async function fetchUserData(userId, options = {}) {
  // TODO: デフォルト引数と分割代入を活用して options を処理
  const { headers = {}, timeout = 5000 } = options;
  // TODO: fetch を使って API にアクセス
  const url = `https://api.example.com/users/${userId}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  // TODO: 成功時は JSON データを返す
  // TODO: エラー時は console.error にメッセージを出力し、undefined を返す
  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(`${response.status}`);
      return undefined;
    }
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
}
const user = await fetchUserData("1");
console.log(user);

// TODO 2: データ変換用のユーティリティ関数群を含むオブジェクト transformers を実装してください。
// snake_case を camelCase に変換する関数と、日付を整形する関数を含めてください。

function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

const transformers = {
  // TODO: オブジェクトのキーを snake_case から camelCase に変換する関数 snakeToCamel を実装
  snakeToCamel: (obj) => {
    // Array.はjsの組み込みオブジェクト。クラス。
    if (Array.isArray(obj)) {
      // map()は配列の各要素に対して()の中の関数を適用して、新しい配列を作る。
      return obj.map(transformers.snakeToCamel);
    } else if (obj !== null && typeof obj === 'object') {
      return Object.keys(obj).reduce((acc, key) => {
      const newKey = snakeToCamel(key);
      // ↓これが再帰関数の部分で、再度関数を呼びだすことによって、ネストが深いところまで、処理を行うことができる。
      acc[newKey] = transformers.snakeToCamel(obj[key]);
      return acc;
    }, {});
  } else{
    return obj;
  }
}};

const data = {
  user_id: 1,
  user_name: 'Taro',
  profile_data: {
    birth_date: '2000-01-01'
  }
};

console.log(transformers.snakeToCamel(data));


// TODO: 日付を 'YYYY-MM-DD' または 'YYYY/MM/DD' 形式で返す formatDate 関数を実装
const formatDate = (date, format = "YYYY-MM-DD") => {
  // 例: formatDate(new Date('2024-06-01')) → '2024-06-01'
  const year = date.getFullYear();
  const month = String(date.getMonth()+1).padStart(2,'0');
  const day = String(date.getDate()).padStart(2,'0');
  if (format === 'YYYY-MM-DD'){
    return `${year}-${month}-${day}`;
  } else {
    return `${year}/${month}/${day}`;
  }
};
console.log(formatDate(new Date('2024-06-01')));