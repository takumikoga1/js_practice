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

  // TODO 2: async/awaitを使った実装
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

  // TODO 3: 並列処理の実装
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
