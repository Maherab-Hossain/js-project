

let generatebtn = document.querySelector(`.memeBox .generate`);

let title = document.querySelector(`.memeBox .memeTitle`);
let author = document.querySelector(`.memeBox .memeAuthor`);
let memeImg = document.querySelector(`.memeBox img`);

function output(url, title, author) {
    memeImg.setAttribute(`src`, url);
    title.innerHTML = (title);
    author.innerHTML = `Meme by: ${author}`;

}

function generateMeme ()  {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        output  (data.url, data.title, data.author);
      });
  };

generatebtn.addEventListener("click", generateMeme);

generateMeme();
// generatebtn.addEventListener(`click`,output); ---------------


// const generateMemeBtn = document.querySelector(
//   ".meme-generator .generate-meme-btn"
// );
// const memeImage = document.querySelector(".meme-generator img");
// const memeTitle = document.querySelector(".meme-generator .meme-title");
// const memeAuthor = document.querySelector(".meme-generator .meme-author");

// const updateDetails = (url, title, author) => {
//   memeImage.setAttribute("src", url);
//   memeTitle.innerHTML = title;
//   memeAuthor.innerHTML = `Meme by: ${author}`;
// };

// const generateMeme = () => {
//   fetch("https://meme-api.com/gimme/wholesomememes")
//     .then((response) => response.json())
//     .then((data) => {
//       updateDetails(data.url, data.title, data.author);
//     });
// };

// generateMemeBtn.addEventListener("click", generateMeme);

// generateMeme();