const searchform = document.querySelector('.b2');
const searchbox = document.querySelector('#sbox');
const searchresult = document.querySelector('.im');
const acceskey = "mFG31wnhGo0nAcunuKOPzQ1DFlO_vplI6jgB5XDUseE";
const s = document.querySelector(".bt");
let keyword = '';
let page = 1;
const button = document.createElement('button');
button.classList.add("new");
button.innerHTML = 'More';
button.addEventListener("click",()=>{
    page++;
    search();
            })
            s.appendChild(button);
async function search() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (results) {
        searchresult.innerHTML = '';

        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imagelink = document.createElement('a');
            imagelink.href = result.links.html; // Use 'links.html' instead of 'link.html'
            imagelink.target = "_blank";
            imagelink.appendChild(image);
            searchresult.appendChild(imagelink);
        });
    } else {
        console.error('No results found in the API response.');
    }
    button.style.display = 'block';
}

searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    search();
});
