
// 課題8: TypeScript + Vue3 の実装
// 事前に 5.5.3 モジュール を読んでから取り組む

  // composables/useUser.ts
  import { resolve } from 'path';
import { ref, computed, Ref } from 'vue';

  type User = { id: number; name: string; role: 'admin' | 'user' };
  type ApiResponse<T> = { data: T; error?: string };
  
  export function useUser() {
    const users: Ref<User[]> = ref([]);
    const loading = ref(false);
    const error = ref<string | null>(null);
    
    // TODO: computed で adminユーザーのみをフィルタ
    const adminUsers = computed(() => {
      // 実装
      return users.value.filter(user => user.role === 'admin')
});
    
    // TODO: ユーザー取得関数
    const fetchUsers = async (): Promise<void> => {
      // 実装
      loading.value = true;
      error.value = null;

      try {
        const response: ApiResponse<User[]> = await new Promise((resolve) =>
          setTimeout(() => resolve({data:[]}), 1000)
        );
        users.value = response.data;
      } catch (err) {
        error.value = 'ユーザーの取得に失敗しました';
      } finally {
        loading.value = false;
      }
    };
    return {
      users,
      loading,
      error,
      adminUsers,
      fetchUsers
    };
  }
  