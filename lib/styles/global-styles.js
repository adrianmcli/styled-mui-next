import { injectGlobal } from 'styled-components'

const injectGlobalStyles = () => {
  injectGlobal`
    body {
      background-color: #FAFAFA;
    }
  `
}

export default injectGlobalStyles
