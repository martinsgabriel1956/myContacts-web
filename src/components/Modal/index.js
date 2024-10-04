import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Container, Overlay, Footer } from './styles';
import { Button } from '../Button';

export function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onConfirm,
  onCancel,
}) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">{children}</div>
        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
