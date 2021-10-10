class Navbar extends HTMLElement {
  constructor() {
    super()
  }

  closeMenu = e => {
    const mobileMenu = document.querySelector('.mobile-menu')
    if (e.target.id != 'menu') {
      mobileMenu.classList.remove('opened')
    }
  }

  openMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    if (!mobileMenu.classList.contains('opened')) {
      mobileMenu.classList.add('opened')
    } else {
      mobileMenu.classList.remove('opened')
    }
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('nav').setAttribute('class', 'nav-background')
    } else {
      document.querySelector('nav').removeAttribute('class', 'nav-background')
    }
  }

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
          <i id="menu" class="fas fa-bars"></i>
          <ul class="mobile-menu">
            <li><a href="/">Work</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/assets/joanneberina_resume.pdf" target="_blank">Resume</a></li>
        </ul>
        </div>
      </nav>
    `

    document.querySelectorAll('#nav-ul a, .mobile-menu a').forEach(item => {
      if (item.pathname === window.location.pathname) {
        item.parentElement.classList.add('nav_current')
      }
    })

    document.querySelector('#menu').addEventListener('click', this.openMenu)
    window.addEventListener('resize', this.scrollFunction)
    document.body.addEventListener('click', this.closeMenu)
    window.onscroll = this.scrollFunction
  }
}

customElements.define('nav-bar', Navbar)
