<template>
  <v-toolbar fixed flat app>
    <!-- 코드샌드박에서는 기본 스타일을 오버라이드 할 수 없어서 
    플렉스박스로 해결-->
    <v-layout>
      <v-flex text-xs-center>홈</v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.v-toolbar {
  border-bottom: 5px dotted;
}
</style>