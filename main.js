const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked" : true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked" : false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked" : true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked" : false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null",
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2021-12-11"
    }
];


const postContainer = document.getElementById("container");

let currentDate = new Date();
currentYear = currentDate.getFullYear();

posts.forEach( (post, index) => {
    
        // Change date to european standard
    const postYear = selectPartOfAString(post.created, 0, 4);
    const postMonth = selectPartOfAString(post.created, 5, 7);
    const postDay = selectPartOfAString(post.created, 8, 10);
    let europeanDate = `${postDay}-${postMonth}-${postYear}`

    if (postYear < currentYear) {
        europeanDate = "Un anno fa " + "(" + europeanDate + ")";
    };

        // Creation of the post element
    let newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = 
    `<div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${europeanDate}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <span class="like-button  js-like-button" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </span>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div>
    </div>`
    
    postContainer.append(newPost);

        // Placeholder for missing profile pics
    const authorImg = document.querySelectorAll("div.post-meta__icon");
    
        if (post.author.image === null || post.author.image === "null") {
            authorImg[index].innerHTML = 
            `<div class="placeholder-profile-pic">${selectCapitalLetters(post.author.name)}</div>`
        };

    
        // Like system
    const likeButton = document.querySelectorAll("span.like-button");
    const likeLabel = document.querySelectorAll("span.like-button__label");
    const likeCounter = document.querySelectorAll("#like-counter-1");
    
       if (post.is_liked === true) {
           likeButton[index].classList.add("like-button--liked");
           likeLabel[index].innerHTML = "Ti Piace!";
       };
    
    likeButton[index].addEventListener("click", function() {
        
        if (post.is_liked === true) {
            likeButton[index].classList.remove("like-button--liked");
            likeLabel[index].innerHTML = "Mi Piace";
            post.likes--
            likeCounter[index].innerHTML = post.likes;
            post.is_liked = false;
        } else {
            likeButton[index].classList.add("like-button--liked");
            likeLabel[index].innerHTML = "Ti Piace!";
            post.likes++
            likeCounter[index].innerHTML = post.likes;
            post.is_liked = true;
        };
    });
});





//                              FUNCTIONS


function selectPartOfAString(string, from, to) {
    return string.substring(from, to);
};


function selectCapitalLetters(string) {
    let capitalLetters = "";
    
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < string.length; i++) {
      if (uppercaseLetters.includes(string[i])) {
        capitalLetters += string[i];
      }
    };
    
    return capitalLetters;
  };