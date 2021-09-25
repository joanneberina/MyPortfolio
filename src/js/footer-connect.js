class FooterConnect extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="connect">
      <p class="blurb center">I am open to talking about UX or anything under the sun.</p>
      <h1>Let's Connect!</h1>
      <p id="email">joanne.berina@hotmail.com</p>
      <div class='social'>
        <a href="https://www.linkedin.com/in/joanne-berina/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://medium.com/@joanneberina" target="_blank"><i class="fab fa-medium-m"></i></a>
        <a href="https://github.com/joanneberina" target="_blank"><i class="fab fa-github"></i></a>
      </div>
    </footer>
    `
    document.querySelectorAll('#nav-ul>li>a').forEach(item => {
      if (item.pathname === window.location.pathname) {
        item.parentElement.classList.add('nav_current')
      }
    })
  }
}

customElements.define('footer-connect', FooterConnect)
