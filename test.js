const localStorage = {
  german: ["jjjg", "jgkkjg", "jkkot"],
  hush: ["jjjg", "jgkkjg", "jkkot"],
  boabull: ["jjjg", "jgkkjg", "jkkot"],
  yute: ["jjjg", "jgkkjg", "jkkot"],
};

const _has = Object.prototype.hasOwnProperty.call(localStorage, "germadn");

const t = localStorage.getItem("user");

console.log("t", t);
console.log(" _has", _has);
