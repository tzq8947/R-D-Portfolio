const DIV_IDS = ["home", "about", "research", "planning", "communication", "devandqa", "Presentation", "Team_Workbooks", "Reflection"]
const APPENDIX_DIV_IDS = ["Presentation", "Team_Workbooks", "Reflection"]
const DROPDOWN_ID = "navbarDropdownPortfolio"

const showContent = (id) => {
  DIV_IDS.forEach(divId => {
    const divIdQuery = $(`div#${divId}`)
    const navLinkQuery = $(`a#nav-item-${divId}`)
    const dropdownQuery = $(`a#${DROPDOWN_ID}`)
    if (id == divId) {
      divIdQuery
        .addClass("show")
        .removeClass("hide")

      // Add Nav Item Underline
      navLinkQuery.addClass("underline")

      // Add Dropdown Appendix Underline
      if (APPENDIX_DIV_IDS.includes(divId)) {
        dropdownQuery.addClass("underline")
      }
    } else {
      divIdQuery
        .addClass("hide")
        .removeClass("show")

      // Remove Nav Item Underline
      navLinkQuery.removeClass("underline")

      // Remove Dropdown Appendix Underline
      if (!APPENDIX_DIV_IDS.includes(divId)) {
        dropdownQuery.removeClass("underline")
      }
    }
  })
}
