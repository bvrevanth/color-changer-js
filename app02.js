const btn = document.getElementById("button");
const canvas = document.getElementById("canvas");

const randomClr = () => {
  let val = "123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

btn.addEventListener("click", () => {
  canvas.style.backgroundColor = randomClr();
});
