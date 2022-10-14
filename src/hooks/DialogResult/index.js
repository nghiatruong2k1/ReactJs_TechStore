import { useCallback } from 'react';
import { render } from 'react-dom';
import DialogResult from './DialogResult';
const body = document.body;
function useDialogResult() {
  return useCallback(({ onSuccess, onCancel, title, message, type }) => {
    const div = document.createElement('div');
    body.appendChild(div);
    const onClose = () => {
      body.removeChild(div);
    };
    const child = (
      <DialogResult
        {...{ onClose, onSuccess, onCancel, title, message, type }}
      />
    );
    render(child, div);
  }, []);
}
export default useDialogResult;
