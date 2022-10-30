import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const GoBackBtn = ({ path }) => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(path)}>
      Go Back
    </button>
  );
};

GoBackBtn.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
