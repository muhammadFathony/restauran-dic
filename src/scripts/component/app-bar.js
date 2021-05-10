class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <ul class="nav__list">
            <li class="nav__item"><a href="#home">Home</a></li>
            <li class="nav__item"><a href="#favorite">Favorite</a></li>
            <li class="nav__item"><a href="https://github.com/muhammadFathony">About Us</a></li>  
        </ul>`
  }
}

customElements.define('app-bar', AppBar)
