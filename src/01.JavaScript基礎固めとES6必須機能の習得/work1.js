// 課題1: オブジェクトと配列の操作
// 事前に 3.3.1 の filter, map, reduce を読んでから取り組む

const products = [
    { id: 1, name: 'ノートPC', price: 120000, category: 'electronics' },
    { id: 2, name: 'マウス', price: 3000, category: 'electronics' },
    { id: 3, name: 'コーヒー', price: 500, category: 'food' },
    { id: 4, name: 'モニター', price: 30000, category: 'electronics' }
  ];
  
  // TODO 1: electronics カテゴリの商品のみを抽出
  console.log(products.filter(function(value){
    return value.category == 'electronics';
  }));
  // TODO 2: 全商品の合計金額を計算
  console.log(products.reduce(function(result, value){
    return result + value.price
  }, 0))
  // TODO 3: 価格が10000円以上の商品名のリストを作成
  const expensiveProducts = products.filter(function(value){
    return value.price >= 10000;
  });
  const expensiveProductsList = expensiveProducts.map(function(value){
    return value.name
  })
  console.log(expensiveProductsList);
  // TODO 4: カテゴリごとに商品をグループ化
  const groupedProducts = products.reduce(function(accumulator, currentValue){
    const categoryName = currentValue.category
    if (!accumulator[categoryName]) {
      accumulator[categoryName] = [];
    }
    accumulator[categoryName].push(currentValue)
    return accumulator;
  }, {});