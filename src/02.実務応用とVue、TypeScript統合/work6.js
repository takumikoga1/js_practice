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
      .then((response) => {
        // エラーハンドリング
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // データ処理
        console.log(data);
      })
      .catch((error) => {
        // エラー処理
        console.log(error);
      });
  }
  
  // TODO 2: async/await を使ったAPI取得メソッドを実装してください（10-48参照）
  // - try-catch を使ってエラーハンドリング
  // - fetch → レスポンス確認 → JSON 変換の順に実装
  async getWithAsync(endpoint) {
    try {
      // 実装
      const response = await fetch(`${this.baseURL}${endpoint}`);
      const data = response.json();
      return data;
    } catch (error) {
      // エラーハンドリング
      console.error(error);
    }
  }
  
  // TODO 3: 複数のAPIを並列で取得するメソッドを実装してください（10-45参照）
  // - 引数 endpoints は配列
  // - Promise.all() を使用して全てのAPIを並列で取得し、すべての結果を返す
  async getMultiple(endpoints) {
    // Promise.all を使用
    const promises = endpoints.map((endpoint) => {
      return fetch(`${this.baseURL}${endpoint}`).then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      });
    });
    const results = await Promise.all(promises);
    return results;
  }
}