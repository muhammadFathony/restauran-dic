class FooterBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="footer-restaurant">
            <article class="headline">
                <figure class="headline__figure">
                    <img src="./images/heros/hero-image_3.jpg" alt="Dicoding Fact Sheet">
                    <figcaption>View terbaik, By Mangkang Food</figcaption>
                </figure>
                <div class="headline__content">
                    <h1 class="headline__title">#cerita: View terbaik</h1>
                    <p class="headline__description">Memiliki view yang instragamable pada malam hari merupakan 
                        salah satu kelebihan kafe ini. Banyak orang merasa nyaman makan ataupun hanya sekedar
                        nongkrong di sini pada malam hari.</p>
                    <button class="headline__button button-min">Read More</button>
                </div>
                <div class="footer-basic">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/">Home</a></li>
                        <li class="list-inline-item"><a href="#favorite">Favorite</a></li>
                        <li class="list-inline-item"><a href="https://github.com/muhammadFathony">About Us</a></li>
                    </ul>
                </div>
            </article>
            <div class="copyright">
                Copyright © 2020 - Hunger Apps
            </div>
        </div>`
  }
}
customElements.define('footer-app', FooterBar)
