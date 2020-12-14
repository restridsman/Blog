let form = document.getElementById('create-pun-form');
form.addEventListener('submit', createPun);


const inputTitle = document.getElementsById('Title');
const inputAuthor = document.getElementsById('Author');
let titleSearchValue;
let authorSearchValue;

inputTitle.addEventListener('input', (e)=> {
    titleSearchValue = e.target.value;
});
inputAuthor.addEventListener('input', (e)=> {
    authorSearchValue = e.target.value;
});


async function createPun(e) {
    e.preventDefault();

    /**
     * 1. Retrive the form data
     * 2. Put the formdata in an object
     * 3. JSON stringify the object, before sending the data with an API request
     */


    // this => is the form it self
    let formData = new FormData(this);
    // console.log(formatFormData(formData));

    // You can retrive the for data by selecting the components individually OR use new FormData() 
    console.log(document.getElementById('content-textarea').value)
    console.log(formData.get('content'))




    let object = {
        // content: document.getElementById('content-textarea').value
        content: formData.get('content')
    }
    console.log(object);
    console.log(JSON.stringify(object));

    try {
        await fetch('http://localhost:3000/posts', {
            method: 'POST', // GET, POST, PATCH, DELETE
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:     titleSearchValue,
                author:    'fafaf',
                content:   'content'

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


/*
$("button").click(function() {

    fetch('http://localhost:3000/posts')

    .then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Not successful')
        }

        return response.text();
    })

    .then((data) => {

    //Skapa inlägg

    });



//Om formuläret lyckades skapa ett nytt inlägg,
//skicka vidare användaren till admin/index.html
*/