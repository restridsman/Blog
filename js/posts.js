async function fetchAllPosts(){
    try{
        let response = await fetch('http://localhost:3000/posts')
        let posts =  await response.json();
        console.log(posts);
    

        let output = "";
             for (let post of posts.reverse()) {
                 output += `
                            <div class="content-section">
                                <div class="text-box">
                                    <h2 class="heading">${post.title}</h2>
                                    <p class="date">${post.date.slice(0,10)} <span class="tags">|| ${post.tags}</span></p>  
                                    <p class=content-text>${post.content.slice(0,100)}<br><a href="post.html?id=${post['_id']}" class="read-more-link">...read more</a></p>
                                    <p class="author">// ${post.author}</p>
                                </div> 
                                <div class="spacing"></div>
                            </div>
                     `;
             }
            $('#content-container').html(output);

    
    }catch(error) {
        console.log(error);
    }
}

fetchAllPosts();


const inputValue = document.getElementById("tag-search-field");
const searchBtn = document.getElementById("search-by-tag-btn");
let searchValue;

//Sparar det användaren skriver in i en variabel "searchValue".
inputValue.addEventListener('input', (e)=> {
    searchValue = e.target.value;
});
console.log(searchValue);


searchBtn.addEventListener("click", filterPostsByTag);

inputValue.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        searchBtn.click();
    }
});

async function filterPostsByTag() {

    try{
        let response = await fetch('http://localhost:3000/posts')
        let posts =  await response.json();
        console.log(posts);
    
        let output = "";
        
             for (let post of posts.reverse()) {
                 if (post.tags.includes(searchValue.toLowerCase()))

                    output += `
                               <div class="content-section">
                                   <div class="text-box">
                                       <h2 class="heading">${post.title}</h2>
                                       <p class="date">${post.date.slice(0,10)} <span class="tags">|| ${post.tags}</span></p>  
                                       <p class=content-text>${post.content}<br><a href="post.html?id=${post['_id']}" class="read-more-link">...read more</a></p>
                                       <p class="author">// ${post.author}</p>
                                       </div> 
                                   <div class="spacing"></div>
                               </div>
                        `;
             }
            $('#content-container').html(output);

    
    }catch(error) {
        console.log(error);
    }
}
