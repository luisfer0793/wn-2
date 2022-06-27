import {FC, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Overlay } from '@mantine/core';
import { useElementSize, useMediaQuery, useScrollLock } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavbar } from 'hooks';
import { default as Header } from '../Header/Header.component';
import { default as Navbar } from '../Navbar/Navbar.component';
import { ZINDEX } from 'utils/constants.util';
import { useStyles } from './ApplicationShell.styles';

const ApplicationShell: FC = () => {
  const { width: navbarWidth, ref } = useElementSize();
  
  const { isVisible, handleClose } = useNavbar();
  
  const [, setScrollLock] = useScrollLock();
  
  const isResponsive = useMediaQuery('(max-width: 576px');
  
  const {
    classes: { content, overlay },
  } = useStyles({ navbarWidth });
  
  useEffect(() => {
    if (isVisible && isResponsive) {
      setScrollLock(true);
    } else {
      setScrollLock(false);
    }
  }, [isVisible, isResponsive, setScrollLock]);
  
  return (
    <>
      <Navbar ref={ref} />
      <section className={content}>
        <AnimatePresence>
          {isResponsive && isVisible && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Overlay
                color="#0b1015"
                className={overlay}
                onClick={handleClose}
                zIndex={ZINDEX.OVERLAY}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Header />
        <Outlet />
      </section>
    </>
  );
};

export default ApplicationShell;
