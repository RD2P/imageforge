const input = document.getElementById('input');
const preview = document.getElementById('preview');

input.addEventListener('load', () => {

  const reader = new FileReader()
  reader.onload = function (e) {
    const img = document.createElement("img")
    img.onload - function () {

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 700;
      canvas.height = 500;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataURI = canvas.toDataURL();

      preview.src = dataURI
    }
    img.src = e.target.result
  }


  img.src = dataURI;

})


// img.src = 'bike.jpg';