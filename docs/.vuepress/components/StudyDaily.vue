<template>
  <div>
    <ul class="my-list">
      <li class="my-list-item-1">{{ currentProverb.data }}</li>
      <li class="my-list-item-2">{{ currentProverb.explain }}</li>
      <li class="my-list-item-3">{{ currentProverb.a }}</li>
      <li class="my-list-item-4">{{ currentProverb.b }}</li>
    </ul>
    <button class="btn" @click="generateProv">换一句</button>
  </div>
</template>

<script>
import dataJson from "./study/proverb.json";
import Vue from "vue";
export default {
  data() {
    return {
      proverbs: [],
      currentProverb: {
        keyWord: "",
        data: "",
        explain: "",
        a: "",
        b: "",
      },
    };
  },
  methods: {
    generateProv() {
      let randomProverb = this.getRandomProverb();
      while (randomProverb?.data === this.currentProverb?.data) {
        randomProverb = this.getRandomProverb();
      }
      this.currentProverb = randomProverb;
      Vue.prototype.$global.CURRENT_PROVERB = this.currentProverb.data;
    },
    getRandomProverb() {
      let randomIndex = Math.floor(Math.random() * this.proverbs.length);
      return this.proverbs[randomIndex];
    },
  },
  mounted() {
    this.proverbs = dataJson.proverb;
    this.generateProv();
  },
};
</script>

<style scoped>
.my-list {
  margin: 0;
  padding: 0;
}
.my-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.my-list-item-1 {
  color: #1f1f1f;
  font-weight: bold;
}

.my-list-item-2 {
  color: #1f1f1f;
}

.my-list-item-3 {
  color: #f9c74f; /* 黄色 */
}

.my-list-item-4 {
  color: #90be6d; /* 绿色 */
}
.btn {
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
}
.btn:hover {
  background-color: #006687;
}
</style>
