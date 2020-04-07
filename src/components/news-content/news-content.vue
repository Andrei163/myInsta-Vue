<template>
  <div class="news-content">
    <div class="header">
      <div class="header__avatar">
        <div>
          <a href="/grid.html">
            <img class="header__img" src="../../assets/urgant.jpg" alt />
          </a>
        </div>
        <div class="header__info">
          <div class="header__name">
            <a href>Ivan Urgant</a>
          </div>
          <div class="header__city">
            <a href>London</a>
          </div>
        </div>
      </div>
      <div class="header__sign-wrapper">
        <button class="header__sign">подписаться</button>
      </div>
    </div>
    <imgContent :img="img" />
    <div class="news-content__border">
      <div class="news-content__twit">
        <div class="news-content__lmt">
          <svg
            aria-label="Нравится"
            class="news-content__svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
              fill-rule="evenodd"
            />
          </svg>

          <svg
            aria-label="Комментировать"
            class="news-content__svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fill-rule="evenodd"
            />
          </svg>

          <svg
            aria-label="Поделиться публикацией"
            class="news-content__svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"
            />
            <path d="M14.7 48.4l2.9-.7" />
          </svg>
        </div>
        <div class="news-content__xz">
          <svg
            aria-label="Сохранить"
            class="news-content__svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
            />
          </svg>
        </div>
      </div>
      <div class="news-content__comments">
        <comments />
        <comments />
        <comments />
        <comments />
        <comments />
      </div>
      <div class="news-content__comment-form">
        <form class="news-content__chat-form" @submit.prevent="savePost()">
          <textarea
            class="news-content__chat-form-input"
            rows="5"
            type="text"
            aria-label="Ваше сообщение"
            placeholder="Добавить комментарий"
            required
          ></textarea>
          <button class="news-content__chat-form-button" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import comments from "@/components/news-content/comments";
import imgContent from "@/components/news-content/img";
export default {
  props: ["img"],
  data() {
    return {
      endpoint: "http://myinstavue.ecsoculc.ru/picture.json",
      posts: [],
      post: {},
      resource: null
    };
  },
  methods: {
    savePost: function() {
      this.resource.save(this.post);
    }
  },
  components: {
    comments,
    imgContent
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
}

.header__avatar {
  display: flex;
}

.header__img {
  width: 50px;
}

.header__name {
  margin-top: 20px;
}

.header__name a {
  display: block;
  text-decoration: none;
  font-weight: 700;
  vertical-align: middle;
}

.header__city {
  margin-bottom: 25px;
}

.header__city a {
  text-decoration: none;
}
.header__img {
  margin: 10px;
  border-radius: 50%;
}

.header__sign-wrapper {
  width: 200px;
  margin-right: 20px;
}

.header__sign {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  background: #3897f0;
  border-color: #3897f0;
  color: #fff;
  padding: 0 12px;
  cursor: pointer;
}
.news-content {
  justify-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-end: span 3;
  margin-bottom: 40px;
}

.news-content__border {
  margin-top: -5px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
}

.news-content__twit {
  display: flex;
  justify-content: space-between;
}

.news-content__img {
  width: 100%;
}

.news-content__svg {
  margin: 7px;
}

.news-content__comment-form {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0 10px;
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
