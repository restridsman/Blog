window.onload = function() {
    prefillPost();
    // updatePostEvent();
}

async function prefillPost() {
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('id'));

    try {
        let response = await fetch('http://localhost:3000/posts/' + urlParams.get('id'));
        let data = await response.json();
        console.log(data.content);

        document.getElementById('title').value = data.title;
        document.getElementById('author').value = data.content;
        document.getElementById('update-content').value = data.content;

    } catch (message) {
        throw new Error(message);
    }
}




// function updatePostEvent() {
//     let urlParams = new URLSearchParams(window.location.search);
    
//     let form = document.getElementById('update-post-form');
//     form.addEventListener('submit', async function(e) {
//         e.preventDefault();

//         let formData = new FormData(this);
//         let object = {content: formData.get('update-content')}
//         console.log(object);
//         console.log(JSON.stringify(object));
    
//         try {
//             await fetch('http://localhost:3000/posts/' + urlParams.get('id'), {
//                 method: 'PATCH', 
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(object) // body data type must match "Content-Type" header
//             });
    
//             window.location.replace('/admin/index.html') // redirects to the index.html page
//         } catch (message) {
//             throw new Error(message);
//         }
//     });
// }