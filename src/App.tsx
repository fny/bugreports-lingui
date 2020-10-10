import React, { setGlobal, useGlobal } from 'reactn'
import { Trans, plural } from '@lingui/macro'
import { I18nProvider, useLingui } from '@lingui/react'
import { myI18n } from './i18n'

declare module 'reactn/default' {
  export interface State {
    locale: string
  }
}

setGlobal({
  locale: 'en'
})

function toggleLocale() {
  if (myI18n.locale === 'en') {
    myI18n.activate('es')
    setGlobal({ locale: 'es' })
  } else {
    myI18n.activate('en')
    setGlobal({ locale: 'en' })
  }
}

function Page() {
  const [ global, ] =  useGlobal()
  const lingui = useLingui()

  return <div key={global.locale}>
    <Trans id="example1">
      This is the first example.
    </Trans>

    <Trans id="example2">
      This is the second example.
      {lingui.i18n._(plural(10, {one: "one", other: "more"}))}.
    </Trans>
    <button onClick={() => toggleLocale() }>Toggle</button>
  </div>
}


export default function () {
    return (
      <I18nProvider i18n={myI18n}>
        <Page />
      </I18nProvider>
    )
}
