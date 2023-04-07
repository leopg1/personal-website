const socialLinks = document.querySelectorAll(".icon");
const links = [
    {
        name: "email",
        link: "mailto:contact@leopg.dev"
    },
    {
        name: "twitter",
        link: "https://twitter.com/leopg_dev"
    },
    {
        name: "instagram",
        link: "https://instagram.com/leopg.me"
    },
    {
        name: "github",
        link: "https://github.com/leopg1"
    }
]

socialLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Get the name of the clicked element
    const name = link.getAttribute("class").split(" ")[1];

    // Find the corresponding link in the links array
    const linkObj = links.find((link) => link.name === name);

    // Create an anchor element and set its href attribute to the link
    const anchor = document.createElement("a");
    anchor.href = linkObj.link;

    // Simulate a click on the anchor element to open the link
    anchor.click();
  });
});
