# Barebones example of Next.js with Styled-Components and Material-UI

Integrating the Material-UI with Next.js and Styled-Components can be a pain. This repo serves as an example of how to do this.

## Configurable Styles

There are two configurable style files you need to be aware of:

1. `/lib/styles/global-styles.js` — These are global styles that are injected via Styled-Components.
2. `/lib/styles/mui-theme.js` — These are theme overrides for Material-UI.

## Styled-Components

The API is not too complex here, much of the heavy work is done inside `/pages/_document.js`. For a better understanding of what is going on, please look at the base [example](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components) from the official Next.js repo.

## Material-UI

Much of the complexity is dealt with inside the two files located in the `/lib/material-ui` directory.

1. `withRoot.js` is the higher-order component that needs to wrap each and every page.
2. `getPageContext.js` is the code required for Next.js to handle how to inject Material-UI into the page. This is used inside `/pages/_document.js`.

## Combining the two

You will notice that much of the work is done inside the method `getInitialProps()` inside `_document.js`.

## Caveats

Since the default behavior of JSS is to inject style tags at the bottom of the `<head>` tag in the document, the Material-UI theme will override any styled-component settings we apply on it. As a result, you have to remember to use `!important` when customizing your one-off Material-UI components with styled-components (if there are overlapping styles).