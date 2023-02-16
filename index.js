const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

//1. Render song
//2. Scroll top

const app = {
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
      image: "./img/nhung-cau-rap-hay-cua-binz-1.jpg",
    },
    {
      name: "Bigcityboi",
      singer: "Binz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/nhung-cau-rap-hay-cua-binz-1.jpg",
    },
    {
      name: "247 Cuộc gọi ",
      singer: "Kidz",
      path: "./music/Em-La-Ke-Dang-Thuong-Phat-Huy-T4.mp3",
      image: "./img/nhung-cau-rap-hay-cua-binz-1.jpg",
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

  start: function () {
    this.render();
  },
};

app.start();
