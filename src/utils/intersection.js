export const loadImage = (el) => {
  const imageElement = Array.from(el.children).find((el) => {
    return el.nodeName === "IMG";
  });

  if (imageElement) {
    imageElement.addEventListener("load", () => {
      setTimeout(() => el.classList.add("loaded"), 100);
    });
    imageElement.addEventListener("error", () => console.log("error"));
    imageElement.src = imageElement.dataset.url;
  }
};

export const _createObserver = (el) => {
  const options = {
    root: null,
    threshold: "0.5",
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImage(el);
        observer.unobserve(el);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(el);
};

export const _InitLazy = (el) => {
  const options = {
    root: null,
    threshold: "0.5",
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImage(el);
        observer.unobserve(el);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(el);

  if (!window["IntersectionObserver"]) {
    loadImage(el);
  } else {
    _createObserver(el);
  }
};
