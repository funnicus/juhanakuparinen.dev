import { DocumentRendererProps } from '@keystone-next/document-renderer';
import Highlight from 'react-highlight';

const renderers: DocumentRendererProps['renderers'] = {
  // use your editor's autocomplete to see what other renderers you can override
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
    link: ({ children, href }) => {
      return <a href={href}>{children}</a>;
    }
  },
  block: {
    paragraph: ({ children, textAlign }) => {
      return <p style={{ textAlign }}>{children}</p>;
    },
    code: ({ children }) => {
      return (
        <div className="code-block">
          <Highlight>
            {children}
          </Highlight>
        </div>
      );
    },
  },
};

export default renderers;