const caseStudies = [
  {
    name: 'cotp',
    title: 'Clash of the Pencils',
    description:
      'Set out to inspire kiddos to tap into their natural creativity armed with a pencil, paper, and their brilliant minds.',
    link: 'cotp',
    image: 'cotp-thumbnail.png',
    background: ['180.74deg', 'rgba(255, 163, 109, 0.8) -1.61%', 'rgba(249, 231, 212, 0.432) 101.05%'],
    hidden: true
  },
  {
    name: 'documentor',
    title: 'Web app + Mobile app EVV solution',
    description: 'Redesigning DocuMentor’s webapp to increase user adoption.',
    link: 'documentor',
    image: 'documentor-thumbnail-home.png',
    background: ['259.13deg', '#88D9FF 6.13%', '#DFF5FF 99.63%'],
    hidden: false
  },
  {
    name: 'rvway',
    title: 'How might we help RV drivers safely get to their destination?',
    description: 'Generating a safe route for RVs to avoid low bridges and overpasses',
    link: 'rvway',
    image: 'rvway-desktop.png',
    background: ['238.06deg', 'rgba(199, 252, 255, 0.75) 39.54%', '#A9C6FF 97.64%'],
    hidden: false
  }
]

class CaseStudiesList extends HTMLElement {
  constructor() {
    super()
  }

  onHoverItem = e => {
    const [caseStudy] = caseStudies.filter(caseStudy => caseStudy.name == e.target.id)
    const background = [`-${caseStudy.background[0]}`, ...caseStudy.background.slice(1)]
    if (e.type == 'mouseenter') {
      e.target.style.background = `linear-gradient(${background.join()})`
    } else if (e.type == 'mouseleave') {
      e.target.style.background = `linear-gradient(${caseStudy.background.join()})`
    }
  }

  connectedCallback() {
    if (this.getAttribute('mini') == undefined) {
      this.innerHTML = /*html*/ `
      <main id="main">
        ${caseStudies
          .map(
            (caseStudy, index) => /*html*/ `
          <a href="${caseStudy.link}" ${caseStudy.hidden ? 'hidden' : ''}>
          <div id="${
            caseStudy.name
          }" class="case-study-item-container" style="background:linear-gradient(${caseStudy.background.join()});">
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
    } else {
      this.innerHTML = /*html*/ `
      <div class="card-container">
        ${caseStudies
          .map(
            caseStudy => /*html*/ `
          <a id="${caseStudy.name}" class='card' href="${caseStudy.link}" style="min-height: 300px; display:${
              caseStudy.hidden || window.location.pathname == '/' + caseStudy.link ? 'none' : 'default'
            };">
                <div class="card-title" style="min-height: 35%;"><p>${caseStudy.title}</p></div>
                <div class="card-text"><p>${caseStudy.description}</p></div>
          </a>
          `
          )
          .join('')}
      </div>
    `
    }

    const items = document.querySelectorAll('.case-study-item-container')
    items.forEach(item => {
      item.addEventListener('mouseenter', e => this.onHoverItem(e))
      item.addEventListener('mouseleave', e => this.onHoverItem(e))
    })
    console.log(this.mini)
  }
}

customElements.define('case-studies-list', CaseStudiesList)
