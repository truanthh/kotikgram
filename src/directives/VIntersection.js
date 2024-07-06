export default {
  name: "intersection",
  mounted(el, binding) {
    // console.log(el, binding);

    const optionsObs = {
      // root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      // threshold: 1.0,
    };

    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        // console.log("CROSSED!");
        binding.value();
      }
    };

    const observerio = new IntersectionObserver(callback, optionsObs);
    observerio.observe(el);
  },
};
