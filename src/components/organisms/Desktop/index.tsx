import {
  EducationIcon,
  ExpertiseIcon,
  HelloIcon,
  JobExperienceIcon,
  MineSweeperIcon,
  MyPcIcon,
  PDFIcon,
  RecycleBinIcon,
  SoftSkillsIcon,
} from '../../molecules';
import { DialogContainer } from '../../templates';
import styles from './styles.module.scss';

function Desktop() {
  return (
    <div className={styles.desktop}>
      <DialogContainer />
      <MyPcIcon />
      <HelloIcon />
      <RecycleBinIcon />
      <MineSweeperIcon />
      <JobExperienceIcon />
      <EducationIcon />
      <ExpertiseIcon />
      <SoftSkillsIcon />
      <PDFIcon />
    </div>
  );
}

export default Desktop;
