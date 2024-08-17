import vPlayer from "./vPlayer.js";

const videoList = [
  {
    url: "video/revenge0.mp4",
    title: "Ayush",
    desc: "if i cried because of you then definitely i will destroy you !",
    img: "images/gojo.jpg",
  },
  {
    url: "video/revenge.mp4",
    title: "Ayush",
    desc: "it almost 4.7km away from me, one wrong move and game over ☠️",
    img: "images/gojo.jpg",
  },
  {
    url: "video/revenge1.mp4",
    title: "Ayush",
    desc: "I'm failed as a son .",
    img: "images/gojo.jpg",
  },
  {
    url: "video/revenge2.mp4",
    title: "Ayush",
    desc: "open challange to ludhiana police protect them if you can ❤️‍🩹",
    img: "images/gojo.jpg",
  },
    {
    url: "video/revenge3.mp4",
    title: "Ayush",
    desc: "ms. janvi old telegram chats and call history .",
    img: "images/gojo.jpg",
  },
    {
      url: "video/revenge4.mp4",
      title: "Ayush",
      desc: "No caption ! ",
      img: "images/gojo.jpg",
    },
      {
        url: "video/revenge5.mp4",
        title: "Ayush",
        desc: "i updated everything you know about me ,included current location👋",
        img: "images/gojo.jpg",
      },
        {
          url: "video/revenge6.mp4",
          title: "Ayush",
          desc: "No Captain !",
          img: "images/gojo.jpg",
        },
          {
            url: "video/revenge7.mp4",
            title: "Ayush",
            desc: "No captain !",
            img: "images/gojo.jpg",
          },
            {
              url: "video/revenge8.mp4",
              title: "Ayush",
              desc: "All screenshots are safe ",
              img: "images/gojo.jpg",
            },
];

// Videos Wrapper
const videosWrapper = document.querySelector(".videos");

// loader
const loader = document.querySelector(".loader");

setTimeout(() => {
  injectVideos();
  loader.style.display = "none";
}, 2000);

function injectVideos() {
  videoList.forEach((video) => {
    videosWrapper.innerHTML += vPlayer(video);
  });

  const vids = document.querySelectorAll(".vdo-wrapper");

  vids.forEach((vid) => {
    // video
    const vdo = vid.querySelector(".vdo");

    // handle pause play
    const pausePlayBtn = vid.querySelector("#pause-play-btn");
    pausePlayBtn.addEventListener("click", () => {
      if (vdo.paused) {
        vdo.play();
        pausePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        vdo.pause();
        pausePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    });

    // handle like
    const likeBtn = vid.querySelector("#like-btn");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("color-switch");
      dislikeBtn.classList.remove("color-switch");
    });

    // handle dislike
    const dislikeBtn = vid.querySelector("#dislike-btn");
    dislikeBtn.addEventListener("click", () => {
      dislikeBtn.classList.toggle("color-switch");
      likeBtn.classList.remove("color-switch");
    });

    // handle dislike
    const commentsBtn = vid.querySelector("#comments-btn");
    const comments = vid.querySelector(".comments");
    commentsBtn.addEventListener("click", () => {
      comments.classList.toggle("toggle-comments");
    });

    // handle share
    const shareBtn = vid.querySelector("#share-btn");
    const vidTitle = vid.querySelector(".info-wrapper h3");
    shareBtn.addEventListener("click", () => {
      navigator.share({
        title: vidTitle.textContent,
        text: "text",
        url: vdo.src,
      });
    });
  });
}
