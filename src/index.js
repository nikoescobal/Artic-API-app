// step 1: retrieve the image container with get element
// step 2: assign to a variable
// step 3: a. iterate over the data and for each element you need to b.
//  add the image tag to the image container
// step 4: call the variable and populate the src tag into the images variable

// const capitalize = (word) => {
//   word[0].toUpperCase() + word.substring(1).toLowerCase()
// }

// capitalize("Hello")

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
  })).filter((image) => image.description !== null && image.description.length < 40 && image.links !== null && image.name !== null);


  images.map((image) => {
    const imageUrls = image.urls;
    container.insertAdjacentHTML('afterbegin', `<article class="article-style">
    <h2 class="description">${image.description}</h2>
    <img class="img-style" src="${imageUrls}"/>
    <figure class="caption-container">
      <figcaption class="caption-content">
      <svg xmlns="http://www.w3.org/2000/svg" id="${image.id}" class="like h-5 w-5" viewBox="0 0 20 20" fill="red">
      <path fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
        <span class="comment-count">Comments</span>
      </figcaption>x
    </figure>
    <h2 class="name">${image.name},
      ${image.date}</h2>

  </article>`);
  });
};



getImages();