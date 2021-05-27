import Select from "./select.js"

const selectElements = document.querySelectorAll("[data-custom]")

// bei nur einem select element (hier) nicht unbedingt nötig.
selectElements.forEach(selectElement => {
  new Select(selectElement)
})
