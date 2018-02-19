import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../lib/material-ui/getPageContext'
import injectGlobalStyles from '../lib/styles/global-styles'

injectGlobalStyles()

const withJssProvider = (App, pageContext, props) => (
  <JssProvider
    registry={pageContext.sheetsRegistry}
    generateClassName={pageContext.generateClassName}
  >
    <App pageContext={pageContext} {...props} />
  </JssProvider>
)

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet() // for styled-components
    const pageContext = getPageContext() // for material-ui

    // create the wrapped page object
    const page = renderPage(App => props => {
      const WrappedApp = withJssProvider(App, pageContext, props) // for material-ui
      sheet.collectStyles(WrappedApp)  // for styled-components
      return WrappedApp;
    });

    // return styleTags for styled-components and pageContext and styles for material-ui
    return {
      ...page,
      styleTags: sheet.getStyleElement(),
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
      )
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
