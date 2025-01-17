const DIV_IDS = [
  "home",
  "about",
  "research",
  "planning",
  "communication",
  "devandqa",
  "Presentation",
  "Team_Workbooks",
  "Reflection",
];
const APPENDIX_DIV_IDS = ["Presentation", "Team_Workbooks"];
const DROPDOWN_ID = "navbarDropdownPortfolio";
const LAST_PAGE_ID_KEY = "lastPageKey";
const IS_MODAL_PERMANENTLY_HIDDEN_KEY = "isModalPermanentlyHiddenKey";
const LAST_PAGE_ID_DEFAULT = "home";

const showContent = (id) => {
  DIV_IDS.forEach((divId) => {
    const divIdQuery = $(`div#${divId}`);
    const navLinkQuery = $(`a#nav-item-${divId}`);
    const dropdownQuery = $(`a#${DROPDOWN_ID}`);
    if (id == divId) {
      divIdQuery.addClass("show").removeClass("hide");

      // Add Nav Item Underline
      navLinkQuery.addClass("underline");

      // Add Dropdown Appendix Underline
      if (APPENDIX_DIV_IDS.includes(divId)) {
        $(`a#navbarDropdown`).addClass("underline");
        dropdownQuery.addClass("underline");
      } else {
        $(`a#navbarDropdown`).removeClass("underline");
      }
    } else {
      divIdQuery.addClass("hide").removeClass("show");

      // Remove Nav Item Underline
      navLinkQuery.removeClass("underline");

      // Remove Dropdown Appendix Underline
      if (!APPENDIX_DIV_IDS.includes(divId)) {
        dropdownQuery.removeClass("underline");
      }
    }
  });

  // Save last page visited to cache.
  window.localStorage.setItem(LAST_PAGE_ID_KEY, id);
};

window.addEventListener("DOMContentLoaded", () => {
  const lastPageId =
    window.localStorage.getItem(LAST_PAGE_ID_KEY) ?? LAST_PAGE_ID_DEFAULT;
  const isShownOnLoad =
    (window.localStorage.getItem(IS_MODAL_PERMANENTLY_HIDDEN_KEY) ?? "true") === "true";

  const permanentlyHideModal = () => {
    window.localStorage.setItem(IS_MODAL_PERMANENTLY_HIDDEN_KEY, "false");
  };

  const showModal = () => {
    $("#exampleModal").modal("toggle");
  };

  showContent(lastPageId);
  if (isShownOnLoad) showModal();

  $("#info-icon").click(showModal)
  $("#neverShowModalBtn").click(permanentlyHideModal);
});
