const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const heading = $(".container__heading-desc");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playVideo = $(".control__video");
const playMusic = $(".icon-video");
const playPause = $(".icon-pause");

/*1. Render song
  2. Scroll top
  3.Play , pause , seek
  4.CD rotate
  5.Next , prev
  6.Random
  7.Next / Repeat When ended
  8.Active song
  9.Scrool active song into view
  10.Play song when click
*/

const app = {
  isPlay: false,
  currentIndex: 0,
  songs: [
    {
      name: "Nevada",
      singer: "Vicetone",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/nhung-cau-rap-hay-cua-binz-1.jpg",
    },
    {
      name: "Short Skirt",
      singer: "Niz, Trần Huyền Diệp",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/bai2.jpg",
    },
    {
      name: "Bigcityboi",
      singer: "Binz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/bai3.jpeg",
    },
    {
      name: "247 Cuộc gọi ",
      singer: "Kidz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/bai4.jpeg",
    },
    {
      name: "247 Cuộc gọi ",
      singer: "Kidz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/bai4.jpeg",
    },
    {
      name: "247 Cuộc gọi ",
      singer: "Kidz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/bai4.jpeg",
    },
  ],

  render: function () {
    const htmls = this.songs.map((song) => {
      return `
      <ul class="music_list">
      <li class="music_item">
        <img
          src="${song.image}"
          alt=""
          class="music_item-img"
        />
        <div class="group_text">
          <h3 class="music_item-name">${song.name}</h3>
          <p class="music_item-singer">${song.singer}</p>
        </div>
        <div class="music_item-still">
          <i class="icon-still fas fa-ellipsis-h"></i>
        </div>
      </li>
    </ul>`;
    });
    $(".play-music").innerHTML = htmls.join(" ");
  },

  defineProperty: function () {
    Object.defineProperty(this, "CurrentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    // Xử lí phóng to / thu nhỏ CD
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scroolTop = window.scrollY || document.documentElement.scrollTop;
      const newCd = cdWidth - scroolTop;

      if (newCd > 25) {
        cd.style.width = newCd + "px";
      } else {
        cd.style.width = 0;
      }
      cd.style.opacity = newCd / cdWidth;
    };

    // Xử lí khi Click Play
    playVideo.onclick = function () {
      if (app.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    audio.onplay = function () {
      playMusic.classList.remove("playing");
      playPause.classList.remove("playing");
      app.isPlay = true;
    };
    audio.onpause = function () {
      app.isPlay = false;
      playMusic.classList.add("playing");
      playPause.classList.add("playing");
    };
  },

  loadCurrentSong: function () {
    heading.textContent = this.CurrentSong.name;
    cdThumb.style.backgroundImage = `url('${this.CurrentSong.image}')`;
    audio.src = this.CurrentSong.path;
  },
  start: function () {
    // Định nghĩa các thuộc tính cho object
    this.defineProperty();

    // Xử lí các sự kiện
    this.handleEvents();

    // Tải thông tin bài hát vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // Render Playlist
    this.render();
  },
};

app.start();
