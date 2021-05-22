class HeaderApp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="header__inner">
            <div class="title-apps"><a class="header__title button-min" href="/">Hunger Apps</a></div>
            <a href="#" id="hamburger" class="header__menu button-min" aria-label="menu">☰</a>
        </div>`
  }
}

customElements.define('header-app', HeaderApp)
