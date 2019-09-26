class PageAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-button>
    <ion-title>Page two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>This is the second page<h1>
</ion-content>
`;
  }
}

customElements.define('page-about', PageAbout);