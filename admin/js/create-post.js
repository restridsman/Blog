const express = require('express');
//const { Console } = require('console');
const app = express();



async function fetchAllPosts(){
    try{
        let response = await fetch('http://localhost:3000/posts')
        let posts =  await response.json();
        console.log(posts);
        let output = "";
             for (let post of posts) {
                 output += `
                         <div class="well text-center">
                          <h2>${post.title}</h2>
                          <p>${post.content}</p>
                          <p><i>${post.author}</i></p>
                          <p><i>${post.date}</i></p>
                         </div>
                     </div>
                     `;
             }
            $('#content-container').html(output);

    
    }catch(error) {
        console.log(error);
    }
}

fetchAllPosts();




app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000, function() {
    console.log('Server is running on Port 3000');
});


//Om formuläret lyckades skapa ett nytt inlägg,
//skicka vidare användaren till admin/index.html

