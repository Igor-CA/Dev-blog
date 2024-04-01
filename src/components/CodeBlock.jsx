import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ inline, className, children }) => {
  if (inline) {
    // For inline code blocks
    return <code className={className}>{children}</code>;
  }

  const language = className ? className.replace('language-', '') : '';

  return (
    <SyntaxHighlighter style={dracula} language={language} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
