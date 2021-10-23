// step 1: retrieve the image container with get element
// step 2: assign to a variable
// step 3: a. iterate over the data and for each element you need to b.
//  add the image tag to the image container
// step 4: call the variable and populate the src tag into the images variable

// const capitalize = (word) => {
//   word[0].toUpperCase() + word.substring(1).toLowerCase()
// }

// capitalize("Hello")

const appId = 'NJ3ipQ2qLDdQtFKS6pPk';

const addLike = async (image) => {
  console.log(image);
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "item_id": `${image.id}`,
      }),
    })
    .then((response) => response.text()).then(d => console.log(d));
};

const getHearts = (images) => {
  const hearts = document.getElementsByClassName('heart');
  const heartsArray = Array.from(hearts)
  // console.log(hearts);
  heartsArray.forEach((heart, i) => {
    const tempImage = images[i]
    heart.addEventListener('click', () => addLike(tempImage));
  });
};


const url = 'https://api.unsplash.com/search/photos/?query=aesthetic&per_page=20&client_id=BPO4fENIExxJAWfs6JT6pzqtAfZtPcFpQaUOb-FLBTc';
const container = document.querySelector('#image-container');
const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const images = data.results.map((image) => ({
    urls: image.urls.regular,
    id: image.id,
    description: image.description,
    links: image.links,
    name: image.user.first_name,
    date: image.created_at.split('T')[0],
  })).filter((image) => image.description !== null && image.description.length < 40 && image.links !== null && image.name !== null && image.name);
  // eslint-disable-next-line array-callback-return
  images.map((image) => {
    const imageUrls = image.urls;
    container.insertAdjacentHTML('afterbegin', `<article class="article-style">
    <h2 class="description">${image.description}</h2>
    <img class="img-style" src="${imageUrls}"/>
    <figure class="caption-container">
      <figcaption class="caption-content">
      <div class="comment-container">
        <svg xmlns="http://www.w3.org/2000/svg" id="${image.id}" class="heart h-5 w-5" viewBox="0 0 20 20" fill="red">
        <path fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd" />
        </svg>
        <h2 class="name">${image.name},
        ${image.date}</h2>
      </div> 
      <div class="comment-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
          <button class="comment-count">Comments</button>
      </figcaption>
      </div>
    </figure>
  </article>`);
  });
  getHearts(images)
};
// const like = async (id) => {
//   const appID = 'Y5ExZ6TMJ2KXP15dXk0s';
//   await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {
//     method: 'Post',
//     headers: {
//       'content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       item_id: id,
//     }),
//   }).then(() => {
//     updateLikes();
//   });
// };

getImages();

const getAppId = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await response.text();
  // console.log(data);
};

getAppId();