class HeaderApp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="header__inner">
            <a id="menu" class="header__menu">☰</a>
            <div class="title-apps">Hunger Apps</div>
        </div>`
  }
}

customElements.define('header-app', HeaderApp)
