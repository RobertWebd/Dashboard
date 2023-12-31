import { makeAutoObservable } from 'mobx';

class ToastStore {
  openToast = false;

  constructor() {
    makeAutoObservable(this);
  }

  showToast = () => {
    this.openToast = true;
  };

  handleClose = () => {
    this.openToast = false;
  };
}

export const toastStore = new ToastStore();
