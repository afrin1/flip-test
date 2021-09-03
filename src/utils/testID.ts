import { Platform } from 'react-native'

export default function testID(id: string) {
  return Platform.OS === 'android'
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id }
}
