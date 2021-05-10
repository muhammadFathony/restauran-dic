class Jumbotron extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="hero-element">
            <div class="hero-inner">
                <h1 class="hero-title">Restaurant terbaik di jawa tengah</h1>
                <p class="hero-tagline">Banggalah akan kekayaan Indonesia yang semuanya bisa bermanfaat untuk manusia.</p>    
            </div>
        </div>`
  }
}
customElements.define('jumbotron-app', Jumbotron)
