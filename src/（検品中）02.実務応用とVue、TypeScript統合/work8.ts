// 課題8: TypeScript + Vue3 の実装
// 事前に「5.5.3 モジュール」を読んでから取り組んでください。

// === 課題の目的 ===
// Vue3 の Composition API と TypeScript を組み合わせた実務的な型付きのカスタムフック（composable）を作成します。
// 型安全なステート管理とAPI呼び出し処理を体験しましょう。

// === ファイル構成例 ===
// - composables/useUser.ts
// - types/index.ts（型定義は別途定義済みとする）

// 型定義例（参考用）
// type User = { id: number; name: string; role: 'admin' | 'user' }
// type ApiResponse<T> = { data: T; error?: string }

// ==========================
// useUser composable 実装
// ==========================

import { ref, computed, Ref } from 'vue';
import type { User, ApiResponse } from '@/types';

export function useUser() {
  // === 状態定義 ===
  const users: Ref<User[]> = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // TODO 1: admin ユーザーのみをフィルタして返す computed プロパティを実装してください
  // - users.value から role が 'admin' のユーザーだけ抽出
  const adminUsers = computed(() => {
    // ここに実装
  });

  // TODO 2: APIからユーザーデータを取得する fetchUsers 関数を実装してください
  // - 非同期関数で実装
  // - APIエンドポイント: `/api/users` （仮）
  // - 取得前に loading を true にセットし、取得後に false に戻す
  // - 成功すれば users.value にデータをセット、失敗すれば error.value にエラーメッセージをセット
  const fetchUsers = async (): Promise<void> => {
    // ここに実装
  };

  return {
    users,
    loading,
    error,
    adminUsers,
    fetchUsers
  };
}
