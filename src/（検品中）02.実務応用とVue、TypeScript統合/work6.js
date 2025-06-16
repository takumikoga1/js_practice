// 課題6: Promise と async/await の実装
// 事前に 7.5 Promise を読んでから取り組む

// APIクライアントクラスの実装

class ApiClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
    
    // TODO 1: Promiseを使った実装
    getWithPromise(endpoint) {
      return fetch(`${this.baseURL}${endpoint}`)
        .then(response => {
          // エラーハンドリング
        })
        .then(data => {
          // データ処理
        })
        .catch(error => {
          // エラー処理
        });
    }
    
    // TODO 2: async/awaitを使った実装
    async getWithAsync(endpoint) {
      try {
        // 実装
      } catch (error) {
        // エラーハンドリング
      }
    }
    
    // TODO 3: 並列処理の実装
    async getMultiple(endpoints) {
      // Promise.all を使用
    }
  }  