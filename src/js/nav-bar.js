class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <nav>
        <div>
          <a href="/" id="home">
          Joanne Berina
          </a>
          <ul id="nav-ul">
            <li><a href="/">Work</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/assets/joanneberina_resume.pdf" target="_blank">Resume</a></li>
          </ul>
        </div>
      </nav>
    `
    document.querySelectorAll('#nav-ul>li>a').forEach(item => {
      if (item.pathname === window.location.pathname) {
        item.parentElement.classList.add('nav_current')
      }
    })

    const scrollFunction = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('nav').setAttribute('class', 'nav-background')
      } else {
        document.querySelector('nav').removeAttribute('class', 'nav-background')
      }
    }
    window.onscroll = scrollFunction

    window.addEventListener('resize', scrollFunction)
  }
}

customElements.define('nav-bar', Navbar)
