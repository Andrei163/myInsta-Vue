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
      

        <comments v-for="(msg, i) of messages" 
        :key="i" 
        :name="msg.name " 
        :message="msg.message"
        :ind="index"
        
        />
      
      

      <formcomment  />

     
    </div>
  </div>
</template>

<script>
import comments from "@/components/news-content/comments(v2)";
import imgContent from "@/components/news-content/img";
import formcomment from "@/components/news-content/form-comment";
export default {
  props: ["img", "index"],
  
  components: {
    comments,
    imgContent,
    formcomment
  },
 
  computed: {
    messages() {
      return this.$store.getters.messages;
    }
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

.news-content__comment-form {
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0 10px;
}

a,
div,
img,
p,
span,
time {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
a {
  color: inherit;
  text-decoration: none;
}
.etc_control {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.l-float-left {
  float: left;
}
.l-fs-15 {
  font-size: 15px;
}
@media (max-width: 839px) {
  .lm-hidden {
    display: none;
  }
}
.icon {
  position: relative;
  pointer-events: none;
  fill: currentColor;
}
img {
  visibility: hidden;
}
img[src] {
  visibility: visible;
}
.etc_control {
  cursor: pointer;
  color: #818181;
}
.etc_control:hover {
  color: #000;
}
.etc_control .icon {
  position: static;
}
.andropov_image--bordered {
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -1px;
}
::-moz-selection {
  background: #e25a76;
  color: #fff;
}
::-moz-selection,
::selection {
  background: #e25a76;
  color: #fff;
}
.andropov_image {
  overflow: hidden;
}
.t-ff-1-500 {
  font-family: "Roboto", Tahoma;
  font-weight: 500;
}
.t-link,
.vote .vote__users__item {
  cursor: pointer;
}
.t-link:hover,
.t-link:hover time,
.vote .vote__users__item:hover {
  color: #346eb8;
}
.comments__item__self {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: baseline;
  align-items: baseline;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
}
.comments__item__self:hover .vote__button {
  visibility: visible;
}
.comments__item__self,
.comments__item__self--major .comments__item__header {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.comments__item__self--major .comments__item__user {
  padding-left: 42px;
}
.comments__item__self--major .comments__item__user__image {
  position: absolute;
  margin-left: -42px;
  width: 32px;
  height: 32px;
}
.comments__item__self--major .comments__item__user__name {
  font-size: 15px;
}
.comments__item__header,
.comments__item__users {
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;
  -ms-flex-align: baseline;
  align-items: baseline;
}
.comments__item__header {
  -ms-flex-order: 0;
  order: 0;
}
.comments__item__users {
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}
.comments__item__user {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comments__item__date {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.comments__item__user__name {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comments__item__user {
  margin-right: 15px;
}
.comments__item__user__image {
  border-radius: 2px;
}
.comments__item__user__name {
  font-weight: 700;
}
.comments__item__date {
  text-transform: lowercase;
  padding-left: 42px;
}
.comments__item__date {
  font-size: 12px;
  color: #818181;
  margin-right: 15px;
}
.comments__item .etc_control,
.comments__item__reply {
  margin-right: 15px;
  margin-top: -3px;
  -ms-flex-order: 2;
  order: 2;
  -ms-flex-item-align: center;
  align-self: center;
}
.comments__item__reply {
  color: #818181;
  font-size: 14px;
  cursor: pointer;
  margin-right: 16px;
  margin-top: -2px;
}
.comments__item__reply:hover {
  color: #346eb8;
}
@media (max-width: 839px) {
  .comments__item__reply {
    font-size: 12px !important;
    padding: 5px 0;
  }
}
.comments__item .favorite_marker {
  -ms-flex-order: 2;
  order: 2;
  margin-right: 15px;
  -ms-flex-item-align: center;
  align-self: center;
}
.comments__item .favorite_marker .favorite_marker__action {
  margin-left: -5px !important;
  margin-top: -7px !important;
}
.comments__item .vote {
  margin-left: auto;
  -ms-flex-order: 1;
  order: 1;
}
.comments__item .vote__button {
  visibility: hidden;
}
.comments__item .vote__value {
  padding: 0 12px !important;
  min-width: 16px !important;
}
@media (min-width: 840px) {
  .comments__item .vote__value {
    min-width: 40px !important;
  }
}
.comments__item .vote__value__v {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.comments__item .vote--sum-positive .vote__value {
  background-color: #eefbf3;
}
@media (max-width: 839px) {
  .comments__item .vote {
    -ms-flex-order: 3;
    order: 3;
    bottom: 0;
  }
  .comments__item .vote .vote__value {
    background-color: transparent !important;
  }
  .comments__item .vote .vote__button {
    visibility: visible;
  }
}
.comments__item__sep {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  height: 6px;
}
.comments__item__content {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin-top: 9px;
  margin-bottom: 10px;
  -ms-flex-order: 2;
  order: 2;
  width: 100%;
  padding-right: 85px;
}
@media (max-width: 839px) {
  .comments__item__content {
    padding-right: 0;
  }
}
.comments__item__text {
  font-size: 15px;
  line-height: 22px;
  overflow: hidden;
  word-wrap: break-word;
}
.comments__item__text p {
  padding-top: 3px;
  padding-bottom: 3px;
}
.comments__item__text p:first-child {
  padding-top: 0;
}
.favorite_marker {
  cursor: pointer;
  white-space: nowrap;
}
.favorite_marker .icon {
  position: static;
  fill: #818181;
  float: left;
  margin-top: 0;
}
.favorite_marker--type-comment .favorite_marker__action {
  width: 22px;
  height: 28px;
  margin-left: -5.5px;
  margin-top: -7px;
}
.favorite_marker--type-comment .icon {
  width: 11px;
  height: 11px;
}
.favorite_marker__action {
  position: absolute;
  z-index: 1;
}
.favorite_marker:hover:not(.favorite_marker--just_clicked) .icon {
  fill: #e84755;
}
.vote {
  display: -ms-flexbox;
  display: flex;
  line-height: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.vote .vote__button {
  height: 20px;
  color: #818181;
  cursor: pointer;
}
.vote .vote__button .icon {
  position: static;
}
.vote .vote__button__action {
  position: absolute;
  width: 32px;
  height: 32px;
  margin: -29px 0 0 -8px;
}
.vote .vote__button--minus {
  margin-right: 11px;
}
@media (hover: hover) {
  .vote .vote__button--minus:hover {
    color: #cd192e;
  }
}
.vote .vote__button--plus {
  margin-left: 11px;
}
@media (hover: hover) {
  .vote .vote__button--plus:hover {
    color: #07a23b;
  }
}
.vote .vote__value {
  color: #818181;
  cursor: default;
  text-align: center;
  white-space: nowrap;
}
.vote .vote__value:hover {
  position: relative;
}
@media (min-width: 840px) {
  .vote .vote__value:hover .vote__users--not-empty {
    display: block;
  }
}
.vote .vote__value:hover .vote__users--not-empty:before {
  content: "";
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 1px;
  background-color: #fff;
  top: -1px;
  right: 33px;
}
.vote .vote__users__item:before,
.vote .vote__value:hover .vote__users--not-empty:after {
  content: "";
  position: absolute;
  left: 0;
  top: -15px;
  width: 100%;
  height: 15px;
}
.vote .vote__users {
  display: none;
  position: absolute;
  z-index: 2;
  width: auto;
  height: auto;
  background-color: #fff;
  text-align: left;
  font-weight: 400;
  font-size: 0;
  padding: 10px 0 10px 10px;
  border: 1px solid #f4f4f4;
}
.vote .vote__users .icon {
  position: absolute;
  fill: #fff;
  top: -8px;
  right: 32px;
}
.vote .vote__users__content_wrapper {
  height: auto;
  overflow: hidden;
}
.vote .vote__users__content {
  padding-right: 30px;
  width: 150%;
}
.vote .vote__users--overflowed .vote__users__content_wrapper {
  position: relative;
  height: 190px;
}
.vote .vote__users--overflowed .vote__users__content_wrapper:after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 8px;
  background-size: 1px 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAAAXNSR0IArs4c6QAAACxJREFUCB1j+P//PwsTAwMDGyrBDueCWawgLpoYgovQCxbDKQFWB5altnlsAM7MBEjc9sISAAAAAElFTkSuQmCC);
  pointer-events: none;
}
.vote .vote__users--overflowed .vote__users__content {
  height: 100%;
  overflow-y: scroll;
  padding-right: 20px !important;
}
.vote .vote__users__item {
  position: relative;
  display: block;
  height: 35px;
  white-space: nowrap;
}
.vote .vote__users__item:before {
  height: 1px;
  background-color: #f4f4f4;
  top: -8px;
  pointer-events: none;
}
.vote .vote__users__item:first-child:before {
  display: none;
}
.vote .vote__users__item:last-child {
  height: 20px;
}
.vote .vote__users__item__image {
  float: left;
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 2px;
}
.vote .vote__users__item__name {
  display: inline-block;
  position: relative;
  margin-left: 8px;
  font-size: 12px;
}
.vote .vote__users__item--plus {
  color: #07a23b;
}
.vote--sum-positive .vote__value {
  color: #07a23b;
}
.vote:hover {
  z-index: 2;
}
.vote--comment .vote__button {
  padding-top: 1px;
}
@media (max-width: 839px) {
  .vote--comment .vote__button--minus {
    margin-right: 0;
  }
  .vote--comment .vote__button--plus {
    margin-left: 0;
  }
}
.vote--comment .vote__value {
  text-align: center;
  padding: 0 8px;
  min-width: 32px;
  background-color: rgba(129, 129, 129, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.vote--comment .vote__users {
  right: -25px;
  top: 33px;
}
.vote--comment.vote--sum-positive .vote__value {
  background-color: #eefbf3;
}
/*! CSS Used from: Embedded */
.t-ff-1-500 {
  font-family: "Roboto", Tahoma;
  font-weight: 500;
}
.t-link {
  cursor: pointer;
}
.t-link:hover {
  color: #346eb8;
}
.t-link:hover time {
  color: #346eb8;
}
</style>
