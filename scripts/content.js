const images = document.querySelectorAll("img");

if (images) {
  for (image of images){
    if (image.width < 720){
      console.log(image.width);
      continue;
    }  
// create a new container to put the image and set style properties
  const container = document.createElement("div");
  container.style.position = "relative";
  container.style.display = "inline-block";
  
  // Create a new download icon and set styles
  const downloadIcon = document.createElement("span");
  downloadIcon.innerHTML = "👍";
  const anchor = document.createElement('a');
  anchor.href = image.src;
  anchor.setAttribute('download', 'img.jpg');
  anchor.appendChild(downloadIcon);
  downloadIcon.style.position = "absolute";
  downloadIcon.style.top = "-24px";
  downloadIcon.style.right = "-24px";
  downloadIcon.style.fontSize = "20px";
  
    // downloadIcon.href = image.src;
    image.parentNode.insertBefore(container, image);
    container.appendChild(image);
    container.appendChild(anchor);
  }
}