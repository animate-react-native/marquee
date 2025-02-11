<div align="center">
<h1>React Native Marquee</h1>

https://github.com/animate-react-native/marquee/assets/2805320/4fb199b2-491c-4621-bf84-85890a8d6f5e

[![NPM Version](https://img.shields.io/npm/v/@animatereactnative/marquee.svg?style=flat&color=black)](https://www.npmjs.org/package/@animatereactnative/marquee) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/) [![npm](https://img.shields.io/npm/l/@animatereactnative/marquee?style=flat-square)](https://www.npmjs.com/package/@animatereactnative/marquee) [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.npmjs.com/package/@animatereactnative/marquee) <a href="https://twitter.com/mironcatalin"><img src="https://img.shields.io/twitter/follow/mironcatalin?label=Follow @mironcatalin&color=black" alt="Follow Miron Catalin"></a>

</div>

React Native Marquee component, a cross-platform marquee component, powered by Reanimated:

- 🔋 Powered by Reanimated 3
- 📱 Works with Expo
- ✅ Cross-platform (iOS, Android, Web)
- ⚡️ 60-120fps
- 🪝 Works with any React Native element/component
- ⌨️ Written in TypeScript

## Installation

```sh
npm install @animatereactnative/marquee
```

> Also, you need to install [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated), and follow their installation instructions.

## Usage

```js
import { Marquee } from '@animatereactnative/marquee';

// ...

export function Example() {
  return (
    <Marquee spacing={20} speed={1}>
      <Heading>Powered by AnimateReactNative.com</Heading>
    </Marquee>
  );
}
```

## Props

| name          | description                                                                                                                                            | required | type                   | default                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------- | ---------------------------- |
| `children`    | Any component that you'd like to apply infinite scrolling / marquee effect                                                                             | YES      | `React.ReactNode`      | 1                            |
| `speed`       | Animation speed                                                                                                                                        | NO       | `number`               | 1                            |
| `spacing`     | Spacing between repeting elements                                                                                                                      | NO       | `number`               | 0                            |
| `reverse`     | Determine if the animation should be reversed or not. Based on `direction`, `reverse` means left-to-right, right-to-left, top-to-bottom, bottom-to-top | NO       | `boolean`              | false                        |
| `direction`   | Direction of the animation                                                                                                                             | NO       | `"horizontal"`         | `"vertical" or "horizontal"` |
| `style`       | View style to be applied to Marquee container.                                                                                                         | NO       | `StyleProp<ViewStyle>` |                              |
| `position`    | A shared value that you can pass and it will be modified when the marquee runs. Useful if you want to interpolate or run any additional animations     | NO       | `SharedValue<number>`  |                              |
| `withGesture` | Indicates if the Marquee can be controlled by the gestures                                                                                             | NO       | `boolean`              |                              |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

[MIT](./LICENSE)

---

<p align="center">
  <a href="https://www.animatereactnative.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://www.animatereactnative.com/animatereactnative_dark.svg">
      <img alt="AnimateReactNative.com - Premium and Custom React Native animations." src="https://www.animatereactnative.com/animatereactnative_logo.svg" width="50%">
    </picture>
  </a>
</p>
