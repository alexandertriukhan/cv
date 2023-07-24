import React from 'react';

import pdf from '../../../assets/documents/cv.pdf';
import PDFIconSmall from '../../../assets/icons/pdf.png';
import PDFIconBig from '../../../assets/images/pdf.png';
import { DesktopIcon } from '../../templates';
import styles from './styles.module.scss';

const PDFIcon = () => {
  const handleClick = () => {
    window.open(pdf);
  };

  return (
    <div className={styles.pdfIcon}>
      <DesktopIcon
        iconSrc={PDFIconBig}
        iconName="cv.pdf"
        dialogIconSrc={PDFIconSmall}
        onClick={handleClick}
      />
    </div>
  );
};

export default PDFIcon;
