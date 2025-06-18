// 課題1: オブジェクトと配列の操作
// 事前に 3.3.1 の filter, map, reduce を読んでから取り組む

const products = [
    { id: 1, name: "ノートPC", price: 120000, category: "electronics" },
    { id: 2, name: "マウス", price: 3000, category: "electronics" },
    { id: 3, name: "コーヒー", price: 500, category: "food" },
    { id: 4, name: "モニター", price: 30000, category: "electronics" },
];

// TODO 1: electronics カテゴリの商品のみを抽出
console.log("===1===\n");
const filterd = products.filter((p) => p.category === "electronics");
console.log(filterd);

// TODO 2: 全商品の合計金額を計算
console.log("\n===2===\n");
const sum = products.reduce((a, c) => {
    return a + c.price;
}, 0);
console.log(sum);

// TODO 3: 価格が10000円以上の商品名のリストを作成
console.log("\n===3===\n");
const list = products
    .filter((product) => product.price >= 10000)
    .map((product) => product.name);
console.log(list);

// TODO 4: カテゴリごとに商品をグループ化
console.log("\n===4===\n");
const groups = products.reduce((a, c) => {
    const category = c.category;
    if (!a[category]) a[category] = [];
    a[category].push(c);
    return a;
}, {});
console.log(groups);
