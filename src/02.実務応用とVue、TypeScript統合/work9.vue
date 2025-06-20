<!-- 課題9: Vueコンポーネントの実装 -->
<!-- 事前に「7.3 ストレージ」を読んでから取り組んでください（ストレージを活用して永続化を考慮するため） -->

<!-- === 課題の目的 === -->
<!-- 
  - Vue3 の Composition API で作成した composable（useUser）を実際のコンポーネントで活用する練習
  - API呼び出し、ローディング表示、エラー表示、データのレンダリングまで一通り実装体験する
-->

<!-- === 実装内容 === -->
<!-- 
  - composables/useUser.ts で作成した useUser() を利用して、ユーザー一覧を表示する UserList.vue を作成します。
  - 画面上で「読み込み中」「エラー発生時」「ユーザー一覧表示」の各状態を表示できるようにしてください。
-->

<template>
  <div class="user-list">

    <!-- TODO 1: ローディング中は「読み込み中...」と表示 -->
    <!-- 例: v-if="loading" -->
    <div v-if = "loading">読み込み中...</div>

    <!-- TODO 2: エラーがあればエラーメッセージを表示 -->
    <!-- 例: v-if="error" -->
    <div v-if = "error">{{ error }}</div>

    <!-- TODO 3: ユーザーリストを表示 -->
    <!-- 例: v-for で users を表示 -->
    <div v-for = "user in users" :key="user.id" class="user-list">{{ user.name }}</div>

    <!-- TODO 4 (応用): adminUsers を別でフィルターして表示してもOK -->
    <div v-for = "admin in adminUsers" :key="admin.id" class="user-list">{{ admin.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import { useUser } from '@/composables/useUser';
import { useUser } from 'src/02.実務応用とVue、TypeScript統合/work8.ts';

// TODO 5: useUser() composable を呼び出して、必要な状態・関数を取得してください
// - users, loading, error, fetchUsers など
const { users, loading, error, adminUsers, fetchUsers } = useUser();


// TODO 6: onMounted フックを使って、コンポーネントマウント時に fetchUsers() を実行してください
onMounted ( () =>{
  fetchUsers();
});
</script>

<style scoped>
/* TODO: スタイルは自由に実装してください */
.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
