## 1.0.1

# Features

- Added the download, documentation and error pages; Populated all with content
- Added `scrollOffeset` function to scroll to an element with a certain offset and scroll behavior
- Added `.dvh-100`, `.svh-100` and `.lvh-100` for setting the height to 100% of the viewport height on mobile
- Added `.dvw-100`, `.svw-100` and `.lvw-100` for setting the width to 100% of the viewport width on mobile
- Added `.min-dvh-100`, `.min-svh-100` and `.min-lvh-100` for setting the minimum height to 100% of the viewport height
- Added `.min-dvw-100`, `.min-svw-100` and `.min-lvw-100` for setting the minimum width to 100% of the viewport width
- Added `.swap-sm`, `.swap-md` and `.swap-lg` to reverse the flex item's order when wrapping at different breakpoints
- Added `.breadcrumb` UI component with integrated collapsible sub-menu and customizable separator
- Added `.sticky-bottom` and the adjacent `.sticky-*-bottom` classes (for each breakpont)
- Added `.flex-center` as a condensed version of declaration `.d-flex .align-items-center .justify-content-center`
- Added `.focus-ring-none` to remove the focus ring of an element of for all children of a container
- Added `.opacity-*` classes for setting the opacity of an element
- Added `.z-*` classes for setting the z-index of an element

# Improvements

- Added multiple new variables for `.code` elements color coding
- Added `.code-wrap` and `.code-nowrap` helpers for code snippets
- Added `.bg-light-main` and `.bg-light-alt` besides the `.bg-light` class
- Added `.bg-dark-main` and `.bg-dark-alt` besides the `.bg-dark` class
- Added `.bg-auto` and `.bg-reverse` besides the `:root` and its dark version
- Marked the collection of `.row-cols-*` classes as deprecated due to infrequent use
- Marked the collection of `.d-print-*` classes as deprecated due to infrequent use
- Marked the collection of `.flex-shrink-*` and `.flex-grow-*` classes deprecated due to infrequent use
- Added aliases `.font-*` for classes `.text-*` which manage the font typeface
- Added aliases `.font-size-*` for classes `.fs-*` which manage the font size
- Added aliases `.font-weight-*` for classes `.fw-*` which manage the font weight
- Added aliases `.line-height-*` for classes `.lh-*` which manage the line height
- Added aliases `.font-normal` and `.font-italic` for classes `.fst-normal` and `.fst-italic`
- Added alias `.shadow-md` for class `.shadow`

# Bugfixes

- Fixed the homepage layout; Responsiveness tweaks; Removed hardcoded values
- Fixed `:hover` text color for `button`, `a.button` and `input[type='button']` elements
- Fixed the appliance of the text color class when added to a parent element
- Fixed missing `--background-discrete` dependencies within the theme switcher
- Fixed appearance compatibility for inputs, buttons, selects and text areas
