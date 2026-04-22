import React from 'react';

export const downloadResumePdf = async ({ data, lang, fileName }) => {
  const [{ pdf }, { default: ResumePDF }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./ResumePDF')
  ]);

  const blob = await pdf(
    React.createElement(ResumePDF, { data, lang })
  ).toBlob();

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
