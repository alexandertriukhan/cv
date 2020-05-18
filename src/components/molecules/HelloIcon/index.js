import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HelpIconBig from '../../../assets/images/help.png';
import HelpIconSmall from '../../../assets/icons/help.png';
import { DesktopIcon } from '../../';
import { openDialog } from '../../../store/actions/dialogActions';
import { fetchTextData } from '../../../api';
import yaml from 'js-yaml';

const dialogName = 'Hello.txt';

function HelloDialogContent() {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const contentYaml = await fetchTextData('hello.yaml')
      setContent(yaml.safeLoad(contentYaml));
    })();
  }, []);

  console.log(content)
  return content ? (
    <div className="dialog__body">
      <h4>{content.heading}</h4>
      <p>{content.content}</p>
    </div>
  ) : null;
}

export const getDialog = {
  icon: HelpIconSmall,
  dialogName: dialogName,
  children: <HelloDialogContent />,
};

function HelloIcon({ openDialog }) {
  return (
    <div onClick={() => openDialog(getDialog)}>
      <DesktopIcon iconSrc={HelpIconBig} iconName={dialogName} />
    </div>
  );
}

const mapDispatchToProps = {
  openDialog,
};

export default connect(() => ({}), mapDispatchToProps)(HelloIcon);
