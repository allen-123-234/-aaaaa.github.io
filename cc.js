let select = document.querySelector("select");
select.addEventListener("change", function() {
  console.log("Selected option: " + select.value);
});
