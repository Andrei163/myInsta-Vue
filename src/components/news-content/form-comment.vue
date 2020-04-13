<template>
  <div class="news-content__comment-form">
    <form class="news-content__chat-form" @submit.prevent="savePost()">
      <div>
        <textarea
          class="news-content__chat-form-input"
          rows="5"
          type="text"
          aria-label="Ваше сообщение"
          v-model="message"
          id="message"
          placeholder="Добавить комментарий"
          required
        ></textarea>
        <input v-model="name" placeholder="Введите ваше имя" required />
      </div>

      <button class="news-content__chat-form-button" type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["ind"],
  
  data() {
    return {
      name: "",
      message: ""
    };
  },
  methods: {
    savePost: function() {
      const message = { 
        index: this.ind,
        name: this.name,
        message: this.message
      };
      this.$store.dispatch("createMessage", message);
    }
  },

  computed: {
    messages() {
      return this.$store.getters.messages;
    }
  }
};
</script>

<style scoped>

.news-content__comment-form {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0 10px;
  border-top: 1px solid rgb(184, 184, 184);
}

.news-content__chat-form {
  display: flex;
  align-items: center;
  padding: 20px 20px;
}

.news-content__chat-form-input {
  display: block;
  resize: none;
  outline: 0;
  width: 500px;
  height: 60px;
  max-height: 80px;
  border: none;
  flex-grow: 2;
  box-sizing: border-box;
}

.news-content__chat-form-input::-webkit-input-placeholder {
  color: #ccc;
}

.news-content__chat-form-input::-moz-placeholder {
  color: #ccc;
}

.news-content__chat-form-input:-ms-input-placeholder {
  color: #ccc;
}

.news-content__chat-form-input::-ms-input-placeholder {
  color: #ccc;
}

.news-content__chat-form-input::placeholder {
  color: #ccc;
}

.news-content__chat-form-input:hover {
  border-color: #deecf8;
  outline: 0;
}

.news-content__chat-form-input:focus {
  border-color: #3897f0;
  outline: 0;
}

.news-content__chat-form-button {
  padding: 9px 20px;
  color: #fff;
  background-color: #3897f0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
  cursor: pointer;
}

.news-content__chat-form-button:hover {
  background-color: #c4c4c4;
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.15);
}

.news-content__chat-form-button:focus {
  border-color: 2px solid #9edcff;
}
</style>
