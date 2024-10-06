import PropTypes from 'prop-types';
import { Overlay } from './styles';
import { Spinner } from '../Spinner';
import { ReactPortal } from '../ReactPortal';
import { useAnimateUnmount } from '../../hooks/useAnimateUnmount';

export function Loader({ isLoading }) {
  const { shouldRender, elementRef: loaderRef } = useAnimateUnmount(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal
      containerId="loader-root"
    >
      <Overlay
        isLeaving={!isLoading}
        ref={loaderRef}
      >
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
