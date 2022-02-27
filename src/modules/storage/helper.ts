import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from './type'

export const getStorage = async (key: StorageKey) => {
  const result = await AsyncStorage.getItem(key)
  if (result === null) return null

  return JSON.parse(result)
}

export const setStorage = async <T>(key: StorageKey, value: T): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const removeStorage = async (key: StorageKey) => {
  await AsyncStorage.removeItem(key)
}
