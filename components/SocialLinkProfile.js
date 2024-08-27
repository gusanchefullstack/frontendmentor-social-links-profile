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
