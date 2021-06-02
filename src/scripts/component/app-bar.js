class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <ul class="nav__list">
            <li class="nav__item"><a class="button-min" href="/">Home</a></li>
            <li class="nav__item"><a class="button-min" href="#/favorites">Favorites</a></li>
            <li class="nav__item"><a class="button-min" href="https://github.com/muhammadFathony">About Us</a></li>  
        </ul>`
  }
}

customElements.define('app-bar', AppBar)
