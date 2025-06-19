// 課題6: Promise と async/await の実装
// 事前に「10.5 Promise/async・await構文」(P.564〜) を読んでから取り組んでください。

// === 課題の目的 ===
// - Promise と async/await を使って非同期処理を理解する
// - エラーハンドリングの書き方を学ぶ
// - 複数リクエストの並列処理を体験する

// === 課題内容 ===
// APIクライアントクラスを作成し、3種類のメソッドを実装してください。
// 各メソッドでは、fetch を使って API からデータを取得します。

// APIクライアントクラスの実装

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  // TODO 1: Promiseチェーンを使ったAPI取得メソッドを実装してください（10-30参照）
  // - fetch(`${this.baseURL}${endpoint}`) を使って取得
  // - .then() を使ってレスポンスを JSON に変換
  // - レスポンスがエラーなら throw でエラー発生
  // - .catch() でエラーを受け取り、適切にエラーハンドリング
  getWithPromise(endpoint) {
    return fetch(`${this.baseURL}${endpoint}`)
      .then(response => {
        // TODO: レスポンスがエラー (response.ok で判定) の場合はエラーを投げる
      })
      .then(data => {
        // TODO: 取得したデータを処理（ここではデータをそのまま返す想定）
      })
      .catch(error => {
        // TODO: エラーが発生した場合はここで処理（console.error など）
      });
  }
  
  // TODO 2: async/await を使ったAPI取得メソッドを実装してください（10-48参照）
  // - try-catch を使ってエラーハンドリング
  // - fetch → レスポンス確認 → JSON 変換の順に実装
  async getWithAsync(endpoint) {
    try {
      // TODO: fetch を使ってデータ取得
      // TODO: response.ok を使ってエラーチェック
      // TODO: JSON を取得して返す
    } catch (error) {
      // TODO: エラーが発生した場合の処理（console.error など）
    }
  }
  
  // TODO 3: 複数のAPIを並列で取得するメソッドを実装してください（10-45参照）
  // - 引数 endpoints は配列
  // - Promise.all() を使用して全てのAPIを並列で取得し、すべての結果を返す
  async getMultiple(endpoints) {
    // TODO: Promise.all を使って endpoints 内の全API取得を並列実行
  }
}