// step 1: retrieve the image container with get element
// step 2: assign to a variable
// step 3: a. iterate over the data and for each element you need to b.
//  add the image tag to the image container
// step 4: call the variable and populate the src tag into the images variable

const url = 'https://api.unsplash.com/search/photos/?query=sushi&per_page=21&client_id=BPO4fENIExxJAWfs6JT6pzqtAfZtPcFpQaUOb-FLBTc';
const container = document.querySelector('#image-container');
const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const images = data.results.map((image) => ({
    urls: image.urls.regular,
    id: image.id,
  }));
  images.map((image) => {
    const imageUrls = image.urls;
    container.insertAdjacentHTML('afterbegin', `<img class="img-style" src="${imageUrls}"/>`);
  });
};
getImages();