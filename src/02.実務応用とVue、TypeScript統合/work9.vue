<!-- 課題9: Vueコンポーネントの実装 -->
<!-- 事前に「10.3 ストレージ」(P.535〜) を読んでから取り組んでください（ストレージを活用して永続化を考慮するため） -->

<!-- === 課題の目的 === -->
<!-- 
  - Vue3 の Composition API で作成した composable（useUser）を実際のコンポーネントで活用する練習
  - API呼び出し、ローディング表示、エラー表示、データのレンダリングまで一通り実装体験する
  - 取得したデータをlocalStorageに保存する機能も検討する（10-24参照）
-->

<!-- === 実装内容 === -->
<!-- 
  - composables/useUser.ts で作成した useUser() を利用して、ユーザー一覧を表示する UserList.vue を作成します。
  - 画面上で「読み込み中」「エラー発生時」「ユーザー一覧表示」の各状態を表示できるようにしてください。
  - 追加課題：取得したデータをlocalStorageに保存し、オフライン時でも表示できるようにする
-->

<template>
  <div class="user-list">
    <!-- TODO 1: ローディング中は「読み込み中...」と表示 -->
    <!-- 例: v-if="loading" -->
    <div v-if="loading">読み込み中...</div>

    <!-- TODO 2: エラーがあればエラーメッセージを表示 -->
    <!-- 例: v-if="error" -->
    <div v-if="error">{{ error }}</div>

    <!-- TODO 3: ユーザーリストを表示 -->
    <!-- 例: v-for で users を表示 -->
    <div v-for="user in users" :key="user.id" class="user-list">
      {{ user.name }}
    </div>

    <!-- TODO 4 (応用): adminUsers を別でフィルターして表示してもOK -->
    <button @click="addUser" type="submit">保存</button>

    <!-- TODO 5 (追加課題): localStorageへの保存・読み込みボタンを追加 -->
    <button @click="load">読み込み</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
// import { useUser } from '@/composables/useUser';
import { useUser } from "src/02.実務応用とVue、TypeScript統合/work8.ts";

// TODO 6: useUser() composable を呼び出して、必要な状態・関数を取得してください
// - users, loading, error, fetchUsers など
const { users, loading, error, adminUsers, fetchUsers } = useUser();

// TODO 7: onMounted フックを使って、コンポーネントマウント時に fetchUsers() を実行してください
onMounted(() => {
  fetchUsers();
});
// TODO 8 (追加課題): localStorageへの保存・読み込み機能を実装（10.3.4 P.538〜参照）
// - 保存時はJSON.stringifyを使用
const addUser = () => {
  const storage = localStorage;
  const user = { id: 1, name: "Tom", role: "admin" };
  storage.setItem("user", JSON.stringify(user));
};
// - 読み込み時はJSON.parseを使用
const load = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const data = JSON.parse(user);
    console.log(data.name);
  }
};
</script>

<style scoped>
/* TODO: スタイルは自由に実装してください */
.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
