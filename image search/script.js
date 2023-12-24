const accessKey = "5qszpNpi8_Q-9QfuRRJ-HyuMI1NHLIPjvuhI-D_u9Vw";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const ShowMore = document.getElementById("show-more-btn");


let inputData = "";
let page = 1;


 async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response=await fetch(url)
    const data=await response.json();
    const results=data.results;
    if(page===1){
        searchResults.innerHTML=""
    }
    results.map((result) =>{
  const ImageWrapper = document.createElement('div')
  ImageWrapper.classList.add("search-result")
  const image=document.createElement('img')
  image.src=result.urls.small
  image.alt=result.alt_description
  const ImageLink=document.createElement('a')
  ImageLink.href=result.links.html
  ImageLink.target="_blank"
  ImageLink.textContent=result.alt_description

  ImageWrapper.appendChild(image)
  ImageWrapper.appendChild(ImageLink)
  searchResults.appendChild(ImageWrapper)
    })
    page++
    if(page > 1){
        ShowMore.style.display="block"
    }
}

formEl.addEventListener("submit",(event) =>{
event.preventDefault();
page=1;
searchImages();
})

formEl.addEventListener("click",() =>{
    searchImages();
    })