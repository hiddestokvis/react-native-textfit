declare module 'react-native-textfit' {
    export default class TextFit extends React.PureComponent<{
        children: any,
        height?: number,
        width?: number,
        style?: any,
        onPress?: (...arg: any[]) => void
    }> {}
}