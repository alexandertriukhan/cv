import React from 'react';
import PDFIconBig from '../../../assets/images/pdf.png';
import PDFIconSmall from '../../../assets/icons/pdf.png';
import pdf from '../../../assets/documents/cv.pdf';
import { DesktopIcon } from '../../';
import styles from './styles.module.scss';

function PDFIcon() {
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
}

export default PDFIcon;
