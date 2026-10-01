# TODO List

## 🧹 Cleanup & Maintenance
- [ ] Remove or archive `manual_create_element_method.js` — legacy HTML string-building file, no longer imported anywhere. Duplicates old rendering approach before React.
- [x] ~~Remove debug `console.log()` statements from `map_images()`~~ — **DONE**: No `console.log()` statements found anywhere in the codebase.
- [ ] Remove commented-out imports in `src/Utils.js`:
  - `Accordion`, `AccordionItem`, etc. (`react-accessible-accordion` — package also unused)
  - `Carousel` from `react-bootstrap`
  - Consider removing `react-accessible-accordion` and `react-bootstrap` from `package.json` if not used elsewhere
- [ ] Audit `package.json` dependencies for unused packages:
  - `react-accessible-accordion` — imported but commented out in Utils.js
  - `react-bootstrap` — imported but commented out in Utils.js
  - `react-bootstrap-carousel` — not used anywhere
  - `react-string-format` — not used in current codebase (was used by old `manual_create_element_method.js`)

## ⚡ Performance Improvements
- [x] ~~Replace the O(n) `map_images()` switch/if chain with an O(1) object lookup~~ — **DONE**: `IMAGE_MAP` object and `map_images()` function already exist in `src/Utils.js`.

## 🛡️ Robustness & Error Handling
- [ ] Add defensive bounds checking throughout `Utils.js` (e.g., check if `dict[index]` exists before accessing properties)
- [ ] Handle edge cases where `blurbs` or `components` arrays might be empty/null
- [ ] Add React Error Boundary around the app to catch rendering crashes gracefully

## 🧩 Code Quality & Readability
- [ ] Extract hardcoded CSS class names into a constants file (`src/constants.js`) for easier maintenance:
  ```javascript
  export const CLASSES = {
    projectDiv: 'project_div',
    iterationDiv: 'iteration_div',
    componentList: 'components_div',
    blurbContainer: 'blurb_div',
    leftBlurbItem: 'left_blurb_item',
    rightBlurbItem: 'right_blurb_item',
    // ... etc
  };
  ```
- [ ] Review `render_blurb` — `left_blurb` and `right_blurb` are initialized as `null` and rendered directly in JSX; verify they don't produce undefined rendering issues with various data scenarios

## 📚 Documentation
- [ ] Add JSDoc comments to public functions (`render_element`, `render_iteration`, `render_blurb`, `render_component`, `create_electronics_page`, etc.)
- [ ] Update `README.md` with project-specific setup instructions, data format expectations, and deployment steps (currently mostly default CRA template)
- [ ] Document the expected JSON data schema for each page category (electronics, guides, plants, programming) — see `src/data/data.json` and `src/data/data_template.json`

## 🎨 UI/UX Enhancements
- [ ] ~~Replace `<HashRouter>` with `<BrowserRouter>`~~ — **Blocked**: GitHub Pages requires `HashRouter` for client-side routing (see README note). Would need `_redirects` file or config changes to use `BrowserRouter`.
- [ ] Add loading states during image rendering
- [ ] Improve responsive layout for the blurb items on mobile devices

## 🧪 Testing
- [ ] Write unit tests for `map_images` function
- [ ] Write component tests for each page's render functions (`create_electronics_page`, etc.)
- [ ] Add integration tests to verify full rendering pipeline works with sample data

## 🔗 Dependency Audit
- [ ] Review `package.json` dependencies — remove unused ones (see Cleanup section above)
- [x] ~~Consider upgrading React and React Router versions~~ — **Done**: Already on React 18 and React Router 6
- [ ] Check for security vulnerabilities using `npm audit`

---

**Last updated:** 2025-07-14
