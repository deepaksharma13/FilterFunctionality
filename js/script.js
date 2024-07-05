let filterSpan = document.getElementById("filterSpan");
filterSpan.addEventListener("click", () => {
  let hideSec = document.querySelectorAll(".hideSec");
  //hideSec.classList.toggle("d-none");
  hideSec.forEach(x => x.classList.toggle('d-block'))
});
