const caseStudies = [
  {
    name: 'documentor',
    title: 'DocuMentor - simplifying an EVV solution',
    description: 'Redesigning the app to remove obstacles that prevents user adaption.',
    link: 'documentor',
    image: 'documentor.png',
    background: 'linear-gradient(259.13deg, #88D9FF 6.13%, #DFF5FF 99.63%)'
  },
  {
    name: 'cotp',
    title: 'Clash of the Pencils',
    description:
      'Set out to inspire kiddos to tap into their natural creativity armed with a pencil, paper, and their brilliant minds.',
    link: 'clash-of-the-pencils',
    image: 'cotp.png',
    background: 'linear-gradient(180.74deg, rgba(255, 163, 109, 0.8) -1.61%, rgba(249, 231, 212, 0.432) 101.05%)'
  },
  {
    name: 'rvway',
    title: 'How might we help RV drivers safely get to their destination?',
    description:
      'This web mapping service allows users to input their vehicle’s specific height and weight to generate a safe route that will avoid low bridges and overpasses.',
    link: 'rvway',
    image: 'rvway.png',
    background: 'linear-gradient(238.06deg, rgba(199, 252, 255, 0.75) 39.54%, #A9C6FF 97.64%)'
  }
]

class CaseStudiesList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <main id="main">
        ${caseStudies.map(
          (caseStudy, index) => /*html*/ `
          <a href="${caseStudy.link}">
          <section class="case-study ${index % 2 == 0 && 'reverse'}" style="background:${caseStudy.background};">
              <div id="${caseStudy.name}-image" class="case-study-image">
                <img src="images/${caseStudy.image}" alt="${caseStudy.name}" />
              </div>
              <div class="case-text">
                <h2 class="case-title">${caseStudy.title}</h2>
                <p class="case-desc">${caseStudy.description}</p>
                
              </div>
            </section>
            </a>
          `
        )}
      </main>
    `
    document.querySelectorAll('#nav-ul>li>a').forEach(item => {
      if (item.pathname === window.location.pathname) {
        item.parentElement.classList.add('nav_current')
      }
    })
  }
}

customElements.define('case-studies-list', CaseStudiesList)
