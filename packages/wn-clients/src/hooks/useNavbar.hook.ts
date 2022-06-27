import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import { useTypedDispatch } from 'redux/store';
import { setNavbarVisibility } from 'redux/slices/layout/layout.slice';
import { headerVisibilitySelector } from 'redux/slices/layout/layout.selector';

import { MEDIA_QUERIES } from 'utils/constants.util';

const useHeader = () => {
  const isResponsive = useMediaQuery(MEDIA_QUERIES.SMALL);

  const isVisible = useSelector(headerVisibilitySelector);

  const dispatch = useTypedDispatch();

  const handleToggle = () => {
    dispatch(setNavbarVisibility(!isVisible));
  };

  const handleOpen = () => {
    dispatch(setNavbarVisibility(true));
  };

  const handleClose = () => {
    dispatch(setNavbarVisibility(false));
  };

  return {
    isResponsive,
    isVisible,
    handleOpen,
    handleClose,
    handleToggle,
  };
};

export default useHeader;
