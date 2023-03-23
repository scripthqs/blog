<template>
  <div>
    <button class="btn" @click="generateProv">换一句</button>
    <ul class="my-list">
      <li class="my-list-item-1">{{ currentProverb.data }}</li>
      <li class="my-list-item-2">{{ currentProverb.explain }}</li>
      <li class="my-list-item-3" v-if="currentProverb.a">{{ currentProverb.a }}</li>
      <li class="my-list-item-4" v-if="currentProverb.b">{{ currentProverb.b }}</li>
    </ul>
  </div>
</template>

<script>
import dataJson from "./study/proverb.json";
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
      text: "",
    };
  },
  methods: {
    generateProv() {
      let randomProverb = this.getRandomProverb();
      if (this.proverbs.length === 1) {
        return (this.currentProverb = randomProverb);
      }
      while (randomProverb?.data === this.currentProverb?.data) {
        randomProverb = this.getRandomProverb();
      }
      this.currentProverb = randomProverb;
      // Vue.prototype.$global.CURRENT_PROVERB = this.currentProverb.data;
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
  list-style: none;
}
.my-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.my-list-item-1 {
  color: #1f1f1f;
  font-size: 20px;
  font-weight: bold;
}

.my-list-item-2 {
  color: #9ea4a8;
}

.my-list-item-3 {
  color: #f9c74f; /* 黄色 */
  font-size: 14px;
}

.my-list-item-4 {
  color: #90be6d; /* 绿色 */
  font-size: 14px;
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
