import { ref, Ref } from 'vue';

type ToastStatus = 'success' | 'alert' | 'error' | 'info';
type Toast = {
  status: ToastStatus
  title: string
  message: string | null
  duration: number
};
type ToastOptions = Omit<Toast, 'status' | 'title'>;

// TODO: Добавить UUID создаваемым уведомлениям.
// TODO: Добавить функции для пуша оставшихся типов.

interface ToastProvider {
  toasts: Ref<Toast[]>
  success: (title: string, options?: ToastOptions) => void
  alert: (title: string, options?: ToastOptions) => void
  error: (title: string, options?: ToastOptions) => void
  info: (title: string, options?: ToastOptions) => void
}

const useToast = (): ToastProvider => {
  const toasts = ref<Toast[]>([]);

  const pushToast = (toast: Toast) => {
    toasts.value.push(toast);
  };

  const _defaultPush = (status: ToastStatus, title: string, options?: ToastOptions) => {
    pushToast({
      status,
      title,
      ...options || {
        message: null,
        duration: 3000,
      },
    });
  };

  const success = (title: string, options?: ToastOptions) => {
    _defaultPush('success', title, options);
  };

  const alert = (title: string, options?: ToastOptions) => {
    _defaultPush('alert', title, options);
  };

  const error = (title: string, options?: ToastOptions) => {
    _defaultPush('error', title, options);
  };

  const info = (title: string, options?: ToastOptions) => {
    _defaultPush('info', title, options);
  };

  return {
    toasts,
    success,
    alert,
    error,
    info,
  };
};

export default useToast;
