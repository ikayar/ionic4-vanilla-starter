
customElements.define('page-home', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-title>Main page</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  <h1>This is main page<h1>
  <ion-button href="#/about">Go to page two</ion-button>
</ion-content>
`;
  }
});

