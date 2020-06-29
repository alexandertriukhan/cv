import React, { useState, useEffect } from 'react';
import { fetchTextData } from '../../../api';
import { Loader } from '../../';
import sanitizeHtml from 'sanitize-html';
import marked from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
});

function DialogContent({ mdFileName }) {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const contentMD = await fetchTextData(mdFileName);
      setContent(marked(contentMD));
    })();
  }, []);

  return content ? (
    <div className="dialog__body" dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
  ) : <Loader />;
}

export default DialogContent;
