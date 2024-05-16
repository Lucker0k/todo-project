import { Bounce, toast } from "react-toastify";

export const errorToastText = (textError: string) =>
  toast.error(textError, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
