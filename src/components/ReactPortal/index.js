import PropTypes from 'prop-types';
import reactDom from 'react-dom';

export function ReactPortal({ children, containerId = 'portal-root' }) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return reactDom.createPortal(children, container);
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  containerId: PropTypes.string,
};
