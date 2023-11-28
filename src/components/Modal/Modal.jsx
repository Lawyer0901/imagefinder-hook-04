import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const close = e => {
      if (e.code === 'Escape' || e.target === e.currentTarget) {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, [closeModal]);
  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

// class ModalOld extends Component {
//   componentDidMount() {
//     // console.log(e.code);
//     window.addEventListener('keydown', this.closeModal);
//   }
//   closeModal = e => {
//     if (e.code === 'Escape' || e.target === e.currentTarget) {
//       this.props.closeModal();
//     }
//   };
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeModal);
//   }
//   render() {
//     const { children } = this.props;
//     return createPortal(
//       <Backdrop onClick={this.closeModal} className="overlay">
//         <ModalContent className="modal">{children}</ModalContent>
//       </Backdrop>,
//       modalRoot
//     );
//   }
// }

export default Modal;
