const postTable = document.getElementById("post-table-admin");

async function fetchAndPrintAllPosts(){
    try{
        let response = await fetch('http://localhost:3000/posts')
        let data =  await response.json();
        console.log(data);
        let output = "";
             for (let post of data) {
                 output += `
                 <tr>
                    <th>${post.title}</th>
                    <th>${post.author}</th>
                    <th>${post.date.slice(0, 10)}</th>
                    <th>
                        <a href="update-post.html" id="update-post-link">Update</a>
                        <a href="#" onclick="handleClick(this); id="delete-post-link">Delete</a>                        
                    </th>
                </tr>
                     `;
             }

        postTable.innerHTML += output;
            

    
    }catch(error) {
        console.log(error);
    }
}


fetchAndPrintAllPosts();

//Funktionen nedan är under konstruktion. Fungerar ej.

function handleClick(myPost) {

    async function fetchAllPosts() {
        try {
            let response = await fetch('http://localhost:3000/posts')
            let data =  await response.json();
            
        } catch(error) {
            console.log(error);
        }

    }
    

    fetch("http://localhost:3000/posts/" + post.id, {
        method: 'DELETE'
    }) 

}