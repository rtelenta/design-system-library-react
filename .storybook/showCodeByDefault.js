// https://github.com/storybookjs/storybook/issues/10430

export default function showCodeByDefault() {
  window.addEventListener('load', () => {
    let loc = window.location.href
    showCodeSamples()

    window.setInterval(() => {
      let newLoc = window.location.href

      if (newLoc !== loc) {
        loc = newLoc
        showCodeSamples()
      }
    }, 300)
  })

  function showCodeSamples() {
    try {
      const docs = document.querySelectorAll('.sbdocs')

      ;[].forEach.call(docs, (el) => {
        const buttons = el.querySelectorAll('button')
        const codeButton = [].find.call(
          buttons,
          (el) => el.textContent === 'Show code'
        )
        if (codeButton) {
          codeButton.click()
        }
      })
    } catch (e) {
      console.warn(e)
    }
  }
}
