import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {ButtonGoBack} from './GoBackBtn.styled'

export const GoBackBtn = ({ path }) => {
  const navigate = useNavigate();

  return (
    <ButtonGoBack  onClick={() => navigate(path)}>
      Go Back
    </ButtonGoBack>
  );
};

GoBackBtn.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
