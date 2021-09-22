import { requireNativeComponent, ViewStyle } from 'react-native';

type ToastProps = {
  show?: () => Promise<void>;
  color: string;
  style: ViewStyle;
};

// export const ToastViewManager = requireNativeComponent<ToastProps>('ToastView');
export const ToastModule = requireNativeComponent<ToastProps>('ToastModule');
