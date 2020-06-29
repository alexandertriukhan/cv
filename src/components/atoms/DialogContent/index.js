import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchTextData } from '../../../api';
import { Loader } from '../../';
import sanitizeHtml from 'sanitize-html';
import marked from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Component make a request for markdown file and renders its content
 *
 * @param {string} mdFileName
 */

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
  ) : (
    <Loader />
  );
}

DialogContent.propTypes = {
  mdFileName: PropTypes.string,
};

export default DialogContent;
