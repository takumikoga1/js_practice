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
  // TODO: fetch を使って API にアクセス
  // TODO: 成功時は JSON データを返す
  // TODO: エラー時は console.error にメッセージを出力し、undefined を返す
}



// TODO 2: データ変換用のユーティリティ関数群を含むオブジェクト transformers を実装してください。
// snake_case を camelCase に変換する関数と、日付を整形する関数を含めてください。
const transformers = {
  // TODO: オブジェクトのキーを snake_case から camelCase に変換する関数 snakeToCamel を実装
  snakeToCamel: (obj) => {
    // 例: { user_id: 1, user_name: 'Taro' } → { userId: 1, userName: 'Taro' }
  },

  // TODO: 日付を 'YYYY-MM-DD' または 'YYYY/MM/DD' 形式で返す formatDate 関数を実装
  formatDate: (date, format = 'YYYY-MM-DD') => {
    // 例: formatDate(new Date('2024-06-01')) → '2024-06-01'
  }
};
