import React from 'react';
import * as S from '../style';
import camelToWords from '../../../../helpers/camelToWords';

const getValueOfObj = (obj, arrOfPaths) => {
  if (arrOfPaths.length === 0 || typeof obj !== 'object' || !obj) {
    return obj;
  }
  const _currentPath = arrOfPaths[0];
  arrOfPaths.shift();
  return getValueOfObj(obj[_currentPath], arrOfPaths);
};

const processLink = (url, replace, data, replaceWith) => {
  if (replace && replaceWith) {
    return url.replace(
      `:${replace}`,
      getValueOfObj(data, replaceWith.split('.')),
    );
  }

  if (replace) {
    return url.replace(`:${replace}`, data[replace]);
  }
  return url;
};

const LinkCol = (colTitle, link, linkReplace, replaceWith) => ({
  title: camelToWords(colTitle),
  dataIndex: colTitle,
  key: colTitle,
  sorter: (a, b) => a[colTitle].localeCompare(b[colTitle]),
  className: 'linkCol',
  render: (text, rowData) => (
    <S.StyledLink to={processLink(link, linkReplace, rowData, replaceWith)}>
      {text}
    </S.StyledLink>
  ),
});

export default LinkCol;
