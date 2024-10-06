import PropTypes from 'prop-types';
import { Container, Overlay, Footer } from './styles';
import { Button } from '../Button';
import { ReactPortal } from '../ReactPortal';
import { useModalController } from './useModalController';

export function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onConfirm,
  onCancel,
  visible,
  isLoading,
}) {
  const { shouldRender, overlayRef } = useModalController(visible);

  if (!shouldRender) return null;

  return (
    <ReactPortal>
      <Overlay
        isLeaving={!visible}
        ref={overlayRef}
      >
        <Container
          danger={danger}
          isLeaving={!visible}
        >
          <h1>{title}</h1>
          <div className="modal-body">{children}</div>
          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
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
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  isLoading: false,
};
