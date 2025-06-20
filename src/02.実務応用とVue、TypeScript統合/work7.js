// 課題7: 実務的な非同期処理パターン
// 事前に「10.5.3 並列処理」(P.568〜) を読んでから取り組んでください。

const { resolveTypeReferenceDirective } = require("typescript");

// === 課題概要 ===
// 実務でもよく使う非同期処理のパターン（リトライ、タイムアウト、逐次実行・並列実行）を体験します。
// それぞれの関数を実装してください。

// ===========================
// 1. リトライ機能付き fetch 関数の実装
// ===========================

// TODO 1: fetchWithRetry 関数を実装してください
// - 引数:
//   - url: リクエスト先URL
//   - options: fetch オプション（省略可、デフォルト空オブジェクト）
//   - maxRetries: リトライ回数（デフォルト 3 回）
// - fetch で失敗した場合、指定回数までリトライを行う
// - 最後まで失敗したらエラーを投げる
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  // ここに実装
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response;
    } catch (error) {
      if (i === maxRetries - 1) {
        throw error;
      }
    }
  }
}

// ===========================
// 2. タイムアウト付き Promise 実装
// ===========================

// TODO 2: withTimeout 関数を実装してください（Promise.raceの活用 - 10-47参照）
// - 引数: 
//   - promise: 任意の Promise
//   - timeoutMs: タイムアウトまでの時間（ミリ秒）
// - timeoutMs ミリ秒以内に promise が完了しなければ、タイムアウトエラーを発生させる
// - Promise.race を活用して実装
function withTimeout(promise, timeoutMs) {
  // ここに実装
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("タイムアウト"));
    }, timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]);
}

// ===========================
// 3. 逐次実行と並列実行の使い分け
// ===========================

// TODO 3: processUserData 関数を実装してください（10-44, 10-45参照）
// - 引数: userIds （配列。複数ユーザーIDが入っている）
// - 各ユーザーのデータを fetch で取得し、さらにそのユーザーの投稿も取得する
// - 複数ユーザーのデータ取得は並列で実行する（Promise.all）
// - 各ユーザーの投稿取得は、そのユーザーのデータ取得が終わってから実行する（逐次実行）
async function processUserData(userIds) {
  // ここに実装
  // 例:
  // 1. https://api.example.com/users/{userId}
  const userFetchPromises = userIds.map((userId) =>
    fetch(`https://api.example.com/users/${userId}`).then((response) =>
      response.json()
    )
  );
  const users = await Promise.all(userFetchPromises);
  // 2. 取得したユーザーデータの中の id を使って
  //    https://api.example.com/users/{userId}/posts を取得
  const results = [];

  for (const user of users) {
    const posts = await fetch(
      `https://api.example.com/users/${userId}/posts`
    ).then((response) => response.json());

    results.push({
      user,
      posts,
    });
  }
  return results;
}