
// 課題8: TypeScript + Vue3 の実装
// 事前に 5.5.3 モジュール を読んでから取り組む

  // composables/useUser.ts
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
    });
    
    // TODO: ユーザー取得関数
    const fetchUsers = async (): Promise<void> => {
      // 実装
    };
    
    return {
      users,
      loading,
      error,
      adminUsers,
      fetchUsers
    };
  }
  