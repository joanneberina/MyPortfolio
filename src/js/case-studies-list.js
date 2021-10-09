const caseStudies = [
  {
    name: 'cotp',
    title: 'Clash of the Pencils',
    description:
      'Set out to inspire kiddos to tap into their natural creativity armed with a pencil, paper, and their brilliant minds.',
    link: 'cotp',
    image: 'cotp-thumbnail.png',
    background: 'linear-gradient(180.74deg, rgba(255, 163, 109, 0.8) -1.61%, rgba(249, 231, 212, 0.432) 101.05%)',
    hidden: true
  },
  {
    name: 'documentor',
    title: 'Web app + Mobile app EVV solution',
    description: 'Redesigning DocuMentor’s apps to remove obstacles that prevents user adoption.',
    link: 'documentor',
    image: 'documentor-thumbnail-home.png',
    background: 'linear-gradient(259.13deg, #88D9FF 6.13%, #DFF5FF 99.63%)',
    hidden: false
  },
  {
    name: 'rvway',
    title: 'How might we help RV drivers safely get to their destination?',
    description:
      'This web mapping service allows users to input their vehicle’s specific height and weight to generate a safe route that will avoid low bridges and overpasses.',
    link: 'rvway',
    image: 'rvway-desktop.png',
    background: 'linear-gradient(238.06deg, rgba(199, 252, 255, 0.75) 39.54%, #A9C6FF 97.64%)',
    hidden: false
  }
]

class CaseStudiesList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <main id="main">
        ${caseStudies
          .map(
            (caseStudy, index) => /*html*/ `
          <a href="${caseStudy.link}" ${caseStudy.hidden ? 'hidden' : ''}>
          <div class="case-study-item-container" style="background:${caseStudy.background};">
            <section class="case-study-item ${index % 2 == 0 ? 'reverse' : ''}" >
                <div id="${caseStudy.name}-image" class="case-study-image">
                  <img src="images/${caseStudy.image}" alt="${caseStudy.name}"/>
                </div>
                <div class="case-text">
                  <h2 class="case-title">${caseStudy.title}</h2>
                  <p class="case-desc">${caseStudy.description}</p>
                  
                </div>
              </section>
            </div>
            </a>
          `
          )
          .join('')}
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
