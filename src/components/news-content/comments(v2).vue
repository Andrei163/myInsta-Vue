<template>
  <div class="news-content__comment-form">
    <!-- <div class="comments__item">
      <div class="comments__item__space"> -->
        <div class="comments__item__self comments__item__self--major">
          <div class="comments__item__header">
            <div class="comments__item__users">
              <!-- User -->
              <a class="comments__item__user t-link" href>
                <img
                  class="andropov_image comments__item__user__image andropov_image--bordered"
                  src="https://png.cmtt.space/user-userpic/c0/a7/bf/c33c4a77434a1b.jpg"
                />

                <p class="comments__item__user__name">
                  <span class="user_name">{{ name  }}</span>
                </p>
              </a>
            </div>

            <!-- Rows separator -->
            <div class="comments__item__sep"></div>

            <!-- Date -->
            <a
              href="https://vc.ru/services/118773-opyt-vmesto-deneg-kak-ne-zarabotat-na-mobilnom-prilozhenii-v-rossii?comment=1756697"
              class="comments__item__date t-link"
              data-id="1756697"
            >
              <time class="time">сегодня&nbsp;в&nbsp;16:09</time>
            </a>
          </div>

          <!-- Vote -->

          <div class="vote vote--comment vote--sum-positive">
            <div class="vote__button vote__button--minus l-float-left">
              <svg
                class="icon icon--ui_arrow_down"
                width="14"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#ui_arrow_down" />
                <svg viewBox="0 0 18 11" id="ui_arrow_down">
                  <path
                    fill-rule="evenodd"
                    d="M8.109 10.41L.369 2.265a1.377 1.377 0 010-1.876 1.217 1.217 0 011.783 0L9 7.594 15.848.39a1.217 1.217 0 011.783 0 1.377 1.377 0 010 1.876L9.89 10.41c-.246.26-.57.39-.891.39-.322 0-.645-.132-.89-.39h-.001z"
                  />
                </svg>
              </svg>
              <div class="vote__button__action"></div>
            </div>

            <div class="vote__value l-float-left t-ff-1-500 l-fs-15">
              <span class="vote__value__v vote__value__v--real">19</span>
              <div class="vote__users lm-hidden vote__users--not-empty vote__users--overflowed">
                <svg class="icon icon--vote_triangle" width="16" height="8">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vote_triangle" />
                </svg>
                <div class="vote__users__content_wrapper">
                  <div class="vote__users__content">
                    <a
                      href="https://vc.ru/u/6351-alex-nosov"
                      class="vote__users__item vote__users__item--plus"
                    >
                      <img
                        class="vote__users__item__image"
                        src="https://leonardo.osnova.io/7276bc5f-d38f-0a2e-e899-36685ae3bcc7/-/scale_crop/64x64/center/"
                      />
                      <p class="vote__users__item__name">Alex Nosov</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="vote__button vote__button--plus l-float-left">
              <svg
                class="icon icon--ui_arrow_up"
                width="14"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#ui_arrow_up" />
                <svg viewBox="0 0 18 11" id="ui_arrow_up">
                  <path
                    fill-rule="evenodd"
                    d="M8.109.39L.369 8.535a1.377 1.377 0 000 1.876c.492.519 1.29.519 1.783 0L9 3.206l6.848 7.205c.492.519 1.29.519 1.783 0a1.377 1.377 0 000-1.876L9.89.39A1.222 1.222 0 009 0c-.322 0-.645.132-.89.39h-.001z"
                  />
                </svg>
              </svg>
              <div class="vote__button__action"></div>
            </div>
          </div>

        
          <div class="comments__item__content">
            <div class="comments__item__text">
              <p>{{ message }} </p>
            </div>
          </div>
          <div class="comments__item__reply">Ответить</div>
        </div>
      </div>
    
  
</template>

<script>
// import commentChild from "@/components/news-content/comment-children";
export default {
  props: ["name", "message", "ind"],
  components: {
    // commentChild
  }
};
</script>









<style scoped>
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