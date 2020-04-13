<template>
  <div class="comments__item__children">
    <div
      data-id="1757230"
      data-date="1586444714"
      data-reply_to="1757228"
      data-rating="0.70168955271726"
      data-user_id="5888"
      class="comments__item"
    >
      <div class="comments__item__space">
        <div class="comments__item__self comments__item__self--major">
          <div class="comments__item__header">
            <div class="comments__item__users">
              <!-- User -->
              <a class="comments__item__user t-link" href="https://vc.ru/u/5888-dima-afonin">
                <img
                  class="andropov_image comments__item__user__image andropov_image--bordered"
                  air-module="module.andropov"
                  data-andropov-type="image"
                  data-image-src="https://png.cmtt.space/user-userpic/c2/d6/f0/30b66d86557f18.jpg"
                  data-image-name
                  style="background-color: transparent;"
                  src="https://png.cmtt.space/user-userpic/c2/d6/f0/30b66d86557f18.jpg"
                />

                <p class="comments__item__user__name">
                  <span class="user_name">Dima Afonin</span>
                </p>
              </a>

              <!-- Reply to -->
              <a
                href="https://vc.ru/services/118773-opyt-vmesto-deneg-kak-ne-zarabotat-na-mobilnom-prilozhenii-v-rossii?comment=1757228"
                class="comments__item__replied_to t-link"
                data-id="1757228"
                air-hover="comments_highlight_id"
                air-leave="comments_unhighlight_id"
              >
                <svg
                  class="icon icon--comments_reply_to"
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use xlink:href="#comments_reply_to" />
                </svg>Serge
              </a>
            </div>

            <!-- Rows separator -->
            <div class="comments__item__sep"></div>

            <!-- Date -->
            <a
              href="https://vc.ru/services/118773-opyt-vmesto-deneg-kak-ne-zarabotat-na-mobilnom-prilozhenii-v-rossii?comment=1757230"
              class="comments__item__date t-link"
              data-id="1757230"
            >
              <time
                class="time"
                air-module="module.date"
                data-date="1586444714"
                data-type="default"
              >сегодня&nbsp;в&nbsp;19:05</time>
            </a>
          </div>

          <!-- Vote -->

          <div
            class="vote vote--comment vote--sum-positive"
                       data-count="1"
          >
            <div class="vote__button vote__button--minus l-float-left">
              <svg
                class="icon icon--ui_arrow_down"
                width="14"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#ui_arrow_down" />
              </svg>
              <div class="vote__button__action"></div>
            </div>

            <div class="vote__value l-float-left t-ff-1-500 l-fs-15">
              <span class="vote__value__v vote__value__v--real">1</span>
            </div>

            <div class="vote__button vote__button--plus l-float-left">
              <svg
                class="icon icon--ui_arrow_up"
                width="14"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xlink:href="#ui_arrow_up" />
              </svg>
              <div class="vote__button__action"></div>
            </div>
          </div>

          <!-- Content -->
          <div class="comments__item__content">
            <div class="comments__item__text">
              <p>Спасибо! Напишем ещё через полгода, когда будут цифры по подписке и новые инфоповоды : )</p>
            </div>
          </div>

          <!-- Reply -->

          <div
            class="comments__item__reply"
           
          >Ответить</div>

          <!-- Favorite -->

          <div
            class="favorite_marker favorite_marker--type-comment favorite_marker--zero"
         
          >
            <svg class="icon icon--favorite_marker" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href="#favorite_marker" />
            </svg>

            <div class="favorite_marker__action"></div>
          </div>

          <!-- Admin -->

          <div
            class="etc_control"
           
          >
            <svg
              class="icon icon--ui_etc"
              width="14"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use xlink:href="#ui_etc" />
            </svg>
          </div>
        </div>
      </div>

      <div class="comments__item__other">
        <!-- Children comments -->
        <div class="comments__item__children"></div>

        <!-- Collapse subtree stripe -->
        <div
          class="comments__item__collapse_subtree"
          
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*! CSS Used from: https://vc-static-bf19cf1.gcdn.co/static/build/vc.ru/all.2bb3a9b5.min.css */
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
.t-link {
  cursor: pointer;
}
.t-link:hover,
.t-link:hover time {
  color: #346eb8;
}
.t-link:hover .icon {
  fill: currentColor;
}
.comments__item {
  width: 100%;
}
.comments__item__space {
  padding: 15px 20px;
  margin-left: -20px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  width: 100%;
}
@media (max-width: 839px) {
  .comments__item__space {
    padding-left: 15px;
    margin-left: -15px;
  }
}
.comments__item__self {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: baseline;
  align-items: baseline;
  -ms-flex-line-pack: start;
  align-content: flex-start;
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
.comments__item__other:hover {
  position: relative;
}
.comments__item__other:hover > .comments__item__collapse_subtree {
  display: block;
}
.comments__item__collapse_subtree {
  display: none;
  position: absolute;
  width: 32px;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
}
.comments__item__collapse_subtree:hover {
  border-left: 2px solid #4086e0;
}
@media (max-width: 839px) {
  .comments__item__collapse_subtree {
    width: 15px;
  }
}
.comments__item__children {
  padding-left: 32px;
  border-left: 1px dashed #ccc;
}
@media (max-width: 839px) {
  .comments__item__children {
    padding-left: 15px;
  }
}
.comments__item__children:empty ~ .comments__item__collapse_subtree {
  display: none !important;
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
.comments__item__date,
.comments__item__replied_to {
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
.comments__item__date,
.comments__item__replied_to {
  font-size: 12px;
  color: #818181;
  margin-right: 15px;
}
.comments__item__replied_to .icon {
  position: static;
  margin-top: -3px;
  margin-right: 3px;
  vertical-align: middle;
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
.t-link:hover .icon {
  fill: currentColor;
}

</style>