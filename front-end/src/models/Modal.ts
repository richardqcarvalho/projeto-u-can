import { AllHTMLAttributes } from 'react';

export type ModalProps = AllHTMLAttributes<HTMLDivElement> & {
  onClose: () => void;
  visible: boolean;
};
