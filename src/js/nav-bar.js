class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <nav>
      <a href="index.html" id="home">
        Joanne Berina
      </a>
      <ul id="nav-ul">
          <li><a href="index.html">Work</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="assets/joanneberina_resume.pdf" target="_blank">Resume</a></li>
      </ul>
    </nav>
    `
    document.querySelectorAll('#nav-ul>li>a').forEach(item => {
      if (item.pathname === window.location.pathname) {
        item.parentElement.classList.add('nav_current')
      }
    })
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('nav-bar').setAttribute('class', 'shrink')
  } else {
    document.querySelector('nav-bar').removeAttribute('class', 'shrink')
  }
}
window.onscroll = scrollFunction

customElements.define('nav-bar', Navbar)

window.addEventListener('resize', scrollFunction())
