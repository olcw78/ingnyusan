import { persistentMap } from '@nanostores/persistent'
import { computed, MapStore, ReadableAtom } from 'nanostores'

export type PreferencesState = {
  theme: 'dark' | 'light'
  language: 'ko' | 'en' | 'fr' | 'jp' | 'ne'
}

class Preference {
  static readonly LocalStorageKeyPrefix = 'theme:'
  static readonly Theme = 'theme'
  static readonly Language = 'language'

  readonly preference$: MapStore<PreferencesState>
  readonly isLightTheme$: ReadableAtom<boolean>

  constructor(initialState: PreferencesState) {
    this.preference$ = persistentMap<PreferencesState>(
      Preference.LocalStorageKeyPrefix,
      initialState
    )

    this.isLightTheme$ = computed(
      this.preference$,
      state => state.theme === 'light'
    )

    // load initial preference reading from localStorage.
    const initialTheme: PreferencesState['theme'] =
      localStorage.getItem(Preference.Theme) ??
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

    document.documentElement.setAttribute('data-theme', initialTheme)
    this.preference$.setKey(Preference.Theme, initialTheme)

    const initialLanguage = localStorage.getItem(
      Preference.Language
    ) as PreferencesState['language']

    this.preference$.setKey(Preference.Language, initialLanguage)
  }

  toggleTheme(): void {
    const { theme } = this.preference$.get()
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', nextTheme)
    this.preference$.setKey(Preference.Theme, nextTheme)
  }
}

export default new Preference({
  theme: 'light',
  language: 'ko',
})
