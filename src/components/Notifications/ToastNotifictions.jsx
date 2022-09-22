import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const successNotify = msg => {
  toast.success(msg);
};

export const warnNotify = msg => {
  toast.warn(msg);
};
