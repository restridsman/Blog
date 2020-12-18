let form = document.getElementById('create-post');
form.addEventListener('submit', createPost);

var inputTitle = document.getElementById('title');
var inputAuthor = document.getElementById('author');
var inputTags = document.getElementById('tags')
var inputContent = document.getElementById('content-textarea');
var titleSearchValue;
var authorSearchValue;
var tagsSearchValue;
var contentSearchValue;

inputTitle.addEventListener('input', (e)=> {
    titleSearchValue = e.target.value;
});
inputAuthor.addEventListener('input', (e)=> {
    authorSearchValue = e.target.value;
});
inputTags.addEventListener('input', (e)=> {
    tagsSearchValue = e.target.value;
});
inputContent.addEventListener('input', (e)=> {
    contentSearchValue = e.target.value;
});


async function createPost(e) {
    e.preventDefault();

    try {
        await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:     titleSearchValue,
                author:    authorSearchValue,
                tags:      tagsSearchValue,
                content:   contentSearchValue

            }),
        });

        window.location.replace('index.html')

    } catch (message) {
        throw new Error(message);
    }
}