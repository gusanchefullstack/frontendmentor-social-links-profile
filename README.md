# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
 <body>
    <main>
      <social-link-profile></social-link-profile>
    </main>
    <template id="social-link-profile-template">
      <div class="card">
        <img
          class="profile-pic"
          src="./assets/images/avatar-jessica.jpeg"
          alt="Profile Picture"
        />
        <div class="name-location-bio">
          <h1 class="name">Jessica Randall</h1>
          <p class="location">London, United Kingdom</p>
          <p class="bio">"Front-end developer and avid reader."</p>
        </div>
        <div class="social-networks-links">
          <div class="button">GitHub</div>
          <div class="button">Frontend Mentor</div>
          <div class="button">LinkedIn</div>
          <div class="button">Twitter</div>
          <div class="button">Instagram</div>
        </div>
      </div>
    </template>
  </body>
```
```css
@media screen and (max-width: 376px) {
  .card {
    max-width: 327px;
    max-height: 579px;
    margin: 0 auto;
    margin-top: 116.5px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .social-networks-links .button {
    margin-left: 24px;
    margin-right: 24px;
  }
}
```
```js
export class SocialLinkProfile extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("social-link-profile-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");

    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/SocialLinkProfile.css");
      const css = await request.text();
      styles.textContent = css;
    }

    loadCSS();
  }
}

customElements.define("social-link-profile", SocialLinkProfile);
```

### Continued development


### Useful resources

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)