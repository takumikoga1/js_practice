// 課題5: 実務で使うモデルクラスの実装
// 事前に「5.5.1 クラス構文（class, constructor, getter, static）」を読んでから取り組んでください。

// === 課題概要 ===
// Todoアプリのモデル（データ構造と操作）をクラスで表現してください。
// クラス構文・getter・static メソッドを活用して実装します。

// ========================
// 1. 単一のTodoアイテムを表す Todo クラスの実装
// ========================
class Todo {
  constructor(data) {
    // TODO: data（オブジェクト）から以下のプロパティを初期化してください。
    // - id: 一意のID
    // - title: タスクのタイトル（文字列）
    // - completed: 完了フラグ（true/false）
    // - createdAt: 作成日時（Date）
    // - updatedAt: 更新日時（Date）
    this.id = data.id;
    this.title = data.title;
    this.completed = data.completed;
    this.createdAt = new Date(Date.createdAt);
    this.updatedAt = new Date(Date.updatedAt);
  }

  // TODO: getter `status` を定義してください。
  // - completed が true なら '完了'、false なら '未完了' を返す
  get status() {
    // 実装
    if (this.completed){
      return '完了'
    } else {
      return '未完了'
    }
  }

  // TODO: 完了状態を反転させる `toggle` メソッドを定義してください。
  // - completed を true/false で切り替える
  // - updatedAt を現在時刻に更新する
  toggle() {
    // 実装
    this.completed = !this.completed
    this.updatedAt = new Date()
  }

  // TODO: JSON.stringify に対応するための `toJSON` メソッドを実装してください。
  // - id, title, completed, createdAt, updatedAt の情報を持つプレーンなオブジェクトを返す
  toJSON() {
    // 実装
    return{
      id: this.id,
      title: this.title,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  // TODO: Todo インスタンスを作成する static メソッド `create(title)` を実装してください。
  // - title を引数にとり、id はランダムまたは現在時刻ベースで生成
  // - completed は false、createdAt/updatedAt は現在時刻とする
  static create(title) {
    // 実装
    const now = Date.now();
    return new Todo({
      id: now,
      title: title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}


// ========================
// 2. Todo の集合を表す TodoList クラスの実装
// ========================
class TodoList {
  constructor() {
    // TODO: todo の配列を初期化
    this.todos = [];
  }

  // TODO: Todo インスタンスをリストに追加する `add(todo)` メソッドを実装
  add(todo) {
    // 実装
    return this.todos.push(todo); 
  }

  // TODO: 指定された ID の Todo を削除する `remove(id)` メソッドを実装
  remove(id) {
    // 実装
    return this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // TODO: 指定された ID の Todo を取得する `find(id)` メソッドを実装
  find(id) {
    // 実装
    return this.todos = this.todos.find((todo) => todo.id === id);
  }

  // TODO: 条件関数 filterFn を使って一致する Todo をすべて返す `findAll(filterFn)` メソッドを実装
  findAll(filterFn) {
    // 実装
    return this.todos.filter(filterFn);
  }
}
