import classNames from 'classnames';
import { marked } from 'marked';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

import { fetchTextData } from '../../../api';
import { Loader } from '../';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);
  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
});

/**
 * Component make a request for markdown file and renders its content
 *
 * @param {string} mdFileName
 * @param {string} className
 */

function DialogContent({ mdFileName, className }) {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const contentMD = await fetchTextData(mdFileName);
      setContent(marked(contentMD));
    })();
  }, [mdFileName]);

  return content ? (
    <div
      className={classNames('dialog__body', className)}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
    />
  ) : (
    <Loader />
  );
}

DialogContent.propTypes = {
  mdFileName: PropTypes.string,
  className: PropTypes.string,
};

export default DialogContent;
