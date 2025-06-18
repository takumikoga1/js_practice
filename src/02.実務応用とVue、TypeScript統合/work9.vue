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

    <!-- TODO 2: エラーがあればエラーメッセージを表示 -->
    <!-- 例: v-if="error" -->

    <!-- TODO 3: ユーザーリストを表示 -->
    <!-- 例: v-for で users を表示 -->

    <!-- TODO 4 (応用): adminUsers を別でフィルターして表示してもOK -->
    
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUser } from '@/composables/useUser';

// TODO 5: useUser() composable を呼び出して、必要な状態・関数を取得してください
// - users, loading, error, fetchUsers など

// TODO 6: onMounted フックを使って、コンポーネントマウント時に fetchUsers() を実行してください
</script>

<style scoped>
/* TODO: スタイルは自由に実装してください */
</style>
