export const STORAGE_KEYS = ['@saw/welcome']

export type StorageKey = '@saw/welcome'

export type StorageData<V> =
  | {
      [key in StorageKey]?: V
    }
  | null
