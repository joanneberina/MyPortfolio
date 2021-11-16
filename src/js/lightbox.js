const allImages = document.querySelectorAll('.figure img, .case-study-img img')
allImages.forEach(
  img =>
    (img.onclick = () => {
      basicLightbox
        .create(
          `
				<img class="lightbox-image" src="${img.src}">
			`
        )
        .show()
    })
)
