import { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';
function ModalBasic() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="ModalWrap">
      <button onClick={() => setModalIsOpen(true)}>누르지 마세요</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className={Modal}
      >
        <div className="Mim">
          <img src="../img/common.jfif" id="mim" />
        </div>
      </Modal>
    </div>
  );
}
export default ModalBasic;
