const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");

main.style.height="fit-content"
main.style.width = "100%";
main.style.display = "grid";
main.style.gridTemplateColumns="33% 33% 33%"

const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(function (data) {
      data.results.map(element => {
      
          const el = document.createElement("div");
          el.className="div1"
          const image = document.createElement("img");
          image.style.height = "200px"
          image.style.borderRadius="100px"
        const text = document.createElement("h2");

        text.innerHTML = `${element.title}`;
          image.src = IMGPATH + element.poster_path;
         
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}


form.addEventListener("submit", e => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;
 
  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
