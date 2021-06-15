import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import Icon from '../../Common/Icon';
import * as S from './style';

const SocialShare = ({ shareLink, jc, jcT, jcM, mb, ...props }) => {
  const url =
    shareLink || (typeof window !== `undefined` && window.location.href);
  return (
    <>
      <S.Container jc={jc} jcT={jcT} jcM={jcM} {...props} mb={mb}>
        <S.ShareWrapper>
          <TwitterShareButton url={url}>
            <Icon icon="twitter" height="24px" width="24px" color="lightBlue" />
          </TwitterShareButton>
        </S.ShareWrapper>
        <S.ShareWrapper>
          <FacebookShareButton url={url}>
            <Icon
              icon="facebook"
              height="24px"
              width="24px"
              color="lightBlue"
            />
          </FacebookShareButton>
        </S.ShareWrapper>
        <S.ShareWrapper>
          <LinkedinShareButton url={url}>
            <Icon
              icon="linkedin"
              height="24px"
              width="24px"
              color="lightBlue"
            />
          </LinkedinShareButton>
        </S.ShareWrapper>
        <S.ShareWrapper>
          <WhatsappShareButton url={url}>
            <Icon
              icon="whatsapp"
              height="24px"
              width="24px"
              color="lightBlue"
            />
          </WhatsappShareButton>
        </S.ShareWrapper>
        <S.ShareWrapper>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:?subject=&body=${url}`}
          >
            <Icon icon="email" height="32px" width="32px" />
          </a>
        </S.ShareWrapper>
      </S.Container>
    </>
  );
};

export default SocialShare;
