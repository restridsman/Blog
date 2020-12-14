

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
                                    <p class=content-text>${post.content}</p>
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