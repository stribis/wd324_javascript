
async function getData() {
  
  const response = await fetch('data.json');
  const data = await response.json();

  const mainContainer = document.querySelector('.main')


  data.forEach(post => {
    //console.log(post.title);

    const postElement = document.createElement('article')

    const template = `
    <span class="post-user">${post.user}</span>
    <h2 class="post-title">${post.blogTitle}</h2>
    <p class="post-body">${post.blogContent}</p>
    <img src="imgs/${post.image.blogImage}" alt="${post.image.imageAlt}">
    `

    postElement.innerHTML = template

    mainContainer.append(postElement)

  });


}

getData()