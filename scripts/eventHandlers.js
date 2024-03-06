function uploadButtonEventHandler() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#image").click();
  });
}

function fileSelectHandler() {
  document.querySelector("#image").addEventListener("change", (event) => {
    const img = new Image();
    const file = event.target.files[0];
    const canvas = document.querySelector("#imageManipulaiton");
    const ctx = canvas.getContext("2d");
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      ctx.clearRect(0, 0, 650, 500);
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );

      document.querySelector("#height").value = parseInt(img.height);
      document.querySelector("#width").value = parseInt(img.width);
    };
  });
}

export { uploadButtonEventHandler, fileSelectHandler };
