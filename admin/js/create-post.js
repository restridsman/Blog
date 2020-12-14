let form = document.getElementById('create-pun-form');
form.addEventListener('submit', createPun);


var inputTitle = document.getElementById('Title');
var inputAuthor = document.getElementById('Author');
var inputContent = document.getElementById('content-textarea');
var contentSearchValue;
var titleSearchValue;
var authorSearchValue;

inputTitle.addEventListener('input', (e)=> {
    titleSearchValue = e.target.value;
});
inputAuthor.addEventListener('input', (e)=> {
    authorSearchValue = e.target.value;
});
inputContent.addEventListener('input', (e)=> {
    contentSearchValue = e.target.value;
});


async function createPun(e) {
    e.preventDefault();

    // this => is the form it self
    let formData = new FormData(this);


    try {
        await fetch('http://localhost:3000/posts', {
            method: 'POST', // GET, POST, PATCH, DELETE
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:     titleSearchValue,
                author:    authorSearchValue,
                content:   contentSearchValue

            }),
        });

        window.location.replace('index.html') // redirects to the index.html page
    } catch (message) {
        throw new Error(message);
    }
}


function formatFormData(formData) {
    let obj = {};
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }

    return obj;
}

$("h1").css("color", "pink");
