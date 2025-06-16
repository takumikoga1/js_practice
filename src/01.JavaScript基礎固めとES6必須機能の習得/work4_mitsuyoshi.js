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
    const { timeout = 1000, headers = {} } = options;
    // TODO: fetch を使って API にアクセス
    const url = `https://api.example.com/users/${userId}`;
    // TODO: 成功時は JSON データを返す
    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    } catch (e) {
        // TODO: エラー時は console.error にメッセージを出力し、undefined を返す
        console.error(e);
        return undefined;
    }
}
// timeout使うなら
// async function fetchUserData(userId, options = {}) {
//     const { timeout = 1000, headers = {} } = options;
//     const url = `https://api.example.com/users/${userId}`;
//     const controller = new AbortController();
//     const timer = setTimeout(() => controller.abort(), timeout);
//     try {
//         const response = await fetch(url, {
//             headers,
//             signal: controller.signal,
//         });
//         clearTimeout(timer);
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         console.error(e);
//         return undefined;
//     }
// }

// TODO 2: データ変換用のユーティリティ関数群を含むオブジェクト transformers を実装してください。
// snake_case を camelCase に変換する関数と、日付を整形する関数を含めてください。
const transformers = {
    // TODO: オブジェクトのキーを snake_case から camelCase に変換する関数 snakeToCamel を実装
    snakeToCamel: (obj) => {
        // 例: { user_id: 1, user_name: 'Taro' } → { userId: 1, userName: 'Taro' }
        // user__idみたいな不正な形式がない保証がある前提
        const re = {};
        for (const key in obj) {
            let camel = "";
            let flag = false;
            for (let i = 0; i < key.length; i++) {
                const c = key[i];
                if (c === "_") flag = true;
                else {
                    if (flag) {
                        camel += c.toUpperCase();
                        flag = false;
                    } else camel += c;
                }
            }
            re[camel] = obj[key];
        }
        return re;
    },

    // 正規表現やばすぎ！
    // snakeToCamel: (obj) => {
    //     const re = {};
    //     for (const key in obj) {
    //         const camel = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    //         re[camel] = obj[key];
    //     }
    //     return re;
    // },

    // TODO: 日付を 'YYYY-MM-DD' または 'YYYY/MM/DD' 形式で返す formatDate 関数を実装
    formatDate: (date, format = "YYYY-MM-DD") => {
        // 例: formatDate(new Date('2024-06-01')) → '2024-06-01'
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        if (format === "YYYY/MM/DD") return `${year}/${month}/${day}`;
        else return `${year}-${month}-${day}`;
    },
};
