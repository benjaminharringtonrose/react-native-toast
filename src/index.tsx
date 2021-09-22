import { requireNativeComponent, ViewStyle } from 'react-native';

type ToastProps = {
  color: string;
  style: ViewStyle;
};

export const ToastViewManager = requireNativeComponent<ToastProps>(
'ToastView'
);

export default ToastViewManager;
