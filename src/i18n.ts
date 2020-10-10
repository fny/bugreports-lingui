import { setupI18n } from '@lingui/core'
import en from './locales/en/messages.js'
import es from './locales/es/messages.js'

export const myI18n = setupI18n()
myI18n.load('en', en)
myI18n.load('es', es)
myI18n.activate('en')
