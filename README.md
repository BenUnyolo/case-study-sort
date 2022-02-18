## Installation

### Install dependencies:

```shell
npm install
```

---

## Usage

### Development mode:

```shell
npm run start
```

### Build application:

```shell
npm run build
```

---

## Approach

### Styles

Style files are separated into base styles, CSS component classes and utility classes, as well as individual page and React component classes. Sass variables are used for colours and breakpoints, along with mixins for media queries. Pages and React components use the BEM methodology to avoid name clashes.

### App

Once the homepage has mounted, two HTTP requests are sent to fetch the case studies and the categories. Once fetched, both of these sets of data are added into the `caseStudies` and `categories` state respectively. Once this happens the category buttons are populated, along with the case study components. For the case study components, the case study array is mapped, then each array item data is added as a prop to the case study card component. If the case studies fetch request fails, an error message shows. When a category is selected the `selectedCategory` state is set which will initiate an array filter function to add only the desired case studies to the `sortedCaseStudies` state. Once the `sortedCaseStudies` state is updated, the page will rerender to show the desired case studies.
