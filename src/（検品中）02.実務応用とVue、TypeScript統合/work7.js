// 課題7: 実務的な非同期処理パターン
// 事前に 7.5.3 並列処理 を読んでから取り組む

// 1. リトライ機能付きfetch
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    // TODO: 失敗時に指定回数リトライする実装
  }
  
  // 2. タイムアウト付きPromise
  function withTimeout(promise, timeoutMs) {
    // TODO: Promise.raceを使ってタイムアウトを実装
  }
  
  // 3. 逐次実行と並列実行の使い分け
  async function processUserData(userIds) {
    // TODO: ユーザーデータを取得し、それぞれの投稿を取得
    // 効率的な実装を考える
  }
  