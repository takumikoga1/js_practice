// 課題8: TypeScript + Vue3 の実装
// 事前に「8.4 モジュール」(P.414〜) を読んでから取り組む

// composables/useUser.ts
import { ref, computed, Ref } from "vue";

type User = { id: number; name: string; role: "admin" | "user" };
type ApiResponse<T> = { data: T; error?: string };

export function useUser() {
  const users: Ref<User[]> = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // TODO: computed で adminユーザーのみをフィルタ（5.5.16 filterメソッド P.230〜参照）
  const adminUsers = computed(() => {
    // 実装
    return users.value.filter((user) => user.role === "admin");
  });

  // TODO: ユーザー取得関数（10.4.2 fetchメソッド P.544〜参照）
  const fetchUsers = async (): Promise<void> => {
    // 実装
    loading.value = true;
    error.value = null;

    try {
      const response: ApiResponse<User[]> = await new Promise((resolve, _) =>
        setTimeout(() => resolve({ data: [] }), 1000)
      );
      users.value = response.data;
    } catch (error) {
      console.error(`エラー：${error}`);

    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    error,
    adminUsers,
    fetchUsers,
  };
}
