<template>
  <div class="studyDaily">
    <button class="btn" @click="nextPage">换一批</button>
    <table>
      <thead>
        <tr>
          <th style="width: 50px; text-align: center">序号</th>
          <th>单词</th>
          <th>释义</th>
          <!-- <th style="width: 80px; text-align: center">操作</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, index) in wordList" :key="word.id">
          <td style="width: 50px; text-align: center">{{ index + 1 }}</td>
          <td>{{ word.word }}</td>
          <td v-html="word.exp"></td>
          <!-- <td style="text-align: center">
            <button class="btn-danger" @click="deleteWord(word.word)">删除</button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getCategory, getWords, deleteWords } from "../service/api";
export default {
  data() {
    return {
      proverbs: [],
      currentProverb: {
        keyWord: "",
        data: "",
        explain: "",
        words: [],
        a: "",
        b: "",
      },
      text: "",
      categoryList: [],
      wordList: [],
      page: {
        page: 1,
        page_size: 10,
      },
    };
  },
  computed: {
    categoryId() {
      return this.categoryList[0].id;
    },
  },
  methods: {
    async getCategoryData() {
      let params = {
        language: "en",
      };
      let { data } = await getCategory(params);
      this.categoryList = data;
      await this.getWordsData();
    },
    async getWordsData() {
      let params = {
        id: this.categoryId,
        language: "en",
        ...this.page,
      };
      let { data } = await getWords(params);
      this.wordList = data;
    },
    async nextPage() {
      this.page.page++;
      await this.getWordsData();
    },
    async deleteWord(word) {
      console.log(word);
      let params = { id: this.categoryId, language: "en", words: [word] };
      console.log(params, "params");
      await deleteWords(params);
      await this.getWordsData();
    },
  },
  mounted() {
    this.getCategoryData();
  },
};
</script>

<style scoped>
.studyDaily {
  position: relative;
}
.btn {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: -60px;
  right: 0;
}
.btn:hover {
  background-color: #006687;
}
</style>
