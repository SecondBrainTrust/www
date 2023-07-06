document.addEventListener("DOMContentLoaded", () => {
  const spaceUriButton = document.querySelector(".space-uri");
  spaceUriButton.addEventListener("click", async (e) => {
    const spaceUri = spaceUriButton.innerText;
    await navigator.clipboard.writeText(spaceUri);
  });
});
