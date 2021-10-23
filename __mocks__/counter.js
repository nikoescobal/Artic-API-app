import { data } from './testData.js';

export const countComments = (paraItemId) => {
  let count = 0;

  data.forEach((object) => {
    if (object.itemId === paraItemId) {
      count = object.comments.length;
    }
  });

  return Promise.resolve({ counter: count });
};

export const countItems = () => {
  let count = 0;
  count = data.length;
  return Promise.resolve({ counter: count });
};