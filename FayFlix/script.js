const API ="https://api.themoviedb.org/3/movie/popular?api_key=e056022c143d4564125d92b9350ae77d&language=en-US";

const imgpath = "https://image.tmdb.org/t/p/original";

const search = "https://api.themoviedb.org/3/search/movie?api_key=e056022c143d4564125d92b9350ae77d&language=en-US&query=";

const movielist = document.getElementById("list");

function getData(API) {
  fetch(API)
    .then((response) => response.json())
    .then((data) => display(data.results));
}

function display(data) {
    movielist.innerHTML="";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `

        <div class="box">
        <img class="posimg" src="${imgpath+item.poster_path}" alt="poster">
        <h2 id="moviename">${item.original_title}</h2>
        <p class="des">${item.overview.slice(0,190)+"..."}</p>
        </div>

        `;
        movielist.appendChild(box)
  });
}

document.querySelector("#find").addEventListener("keyup",function(event){
    console.log(event.target.value);
    if(event.target.value != ""){
        getData(search + event.target.value)
    }else{
        getData(API);
    }
})

getData(API);
