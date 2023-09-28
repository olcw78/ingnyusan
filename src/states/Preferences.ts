import { persistentMap } from "@nanostores/persistent";
import { computed, MapStore, ReadableAtom } from "nanostores";

export type PreferencesState = {
  theme: "dark" | "light";
  language: "ko" | "en" | "fr" | "jp";
};

class Preference {
  static readonly LocalStorageKeyPrefix = "theme:";
  public static readonly Theme = "theme";
  public static readonly Language = "language";

  private readonly _preference$: MapStore<PreferencesState>;
  public get preference$(): MapStore<PreferencesState> {
    return this._preference$;
  }

  public readonly isLightTheme$: ReadableAtom<boolean>;

  constructor(initialState: PreferencesState) {
    this._preference$ = persistentMap<PreferencesState>(
      Preference.LocalStorageKeyPrefix,
      initialState
    );

    this.isLightTheme$ = computed(
      this._preference$,
      (state) => state.theme === "light"
    );

    // load initial preference reading from localStorage.
    const initialTheme: PreferencesState["theme"] =
      localStorage.getItem(Preference.Theme) ??
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
    this._preference$.setKey(Preference.Theme, initialTheme);

    const initialLanguage = localStorage.getItem(
      Preference.Language
    ) as PreferencesState["language"];

    this._preference$.setKey(Preference.Language, initialLanguage);
  }

  public toggleTheme(): void {
    const { theme } = this._preference$.get();
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    this._preference$.setKey(Preference.Theme, nextTheme);
  }
}

export default new Preference({
  theme: "light",
  language: "ko",
});
