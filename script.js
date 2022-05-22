const getNewColor = () => {
  let color = "#";
  let symbols = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  document.body.style.background = color;
  document.getElementById("hex").innerHTML = color;
};
