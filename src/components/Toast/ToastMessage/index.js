import PropTypes from 'prop-types';
import { Container } from './styles';
import { useToastMessageController } from './useToastMessageController';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export function ToastMessage({
  onRemoveMessage, message, isLeaving,
}) {
  const {
    handleRemoveToast,
    elementRef,
    shouldRender,
  } = useToastMessageController(onRemoveMessage, message, isLeaving);

  if (!shouldRender) {
    return null;
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={elementRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="Error Icon" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="Success Icon" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
};
