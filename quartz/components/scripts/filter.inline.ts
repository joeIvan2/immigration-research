document.addEventListener("nav", () => {
  const setupFilters = () => {
    const filterContainers = document.querySelectorAll<HTMLElement>(".claim-filters")
    for (const container of filterContainers) {
      const buttons = container.querySelectorAll<HTMLButtonElement>(".filter-btn")
      const claimsSection = container.closest("article") ?? document
      const claims = claimsSection.querySelectorAll<HTMLElement>(".claim")

      const applyFilter = (filter: string) => {
        for (const claim of claims) {
          if (filter === "all" || claim.dataset.sentiment === filter) {
            claim.style.display = ""
          } else {
            claim.style.display = "none"
          }
        }
        for (const btn of buttons) {
          btn.classList.toggle("active", btn.dataset.filter === filter)
        }
      }

      for (const btn of buttons) {
        btn.addEventListener("click", () => {
          const filter = btn.dataset.filter ?? "all"
          applyFilter(filter)
        })
        window.addCleanup(() => btn.removeEventListener("click", () => {}))
      }
    }
  }

  setupFilters()
})
