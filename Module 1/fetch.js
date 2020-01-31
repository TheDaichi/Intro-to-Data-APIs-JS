/**Using Fetch and Promises */
fetch('rainbow.jpg')
  .then(response => {
    return response.blob();
  })
  .then(blob => {
    document.getElementById("img").src = URL.createObjectURL(blobData);
  })
  .catch(err => {
    console.log(err);
  });

/**Using Async & Await */

fetching()
  .catch(err => {
    console.log(err);
  });

async function fetching() {
  const response = await fetch('rainbow.jpg');
  const blobData = await response.blob();
  document.getElementById("img").src = URL.createObjectURL(blobData);
};

