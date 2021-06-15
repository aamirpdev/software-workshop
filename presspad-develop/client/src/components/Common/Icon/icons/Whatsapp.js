import React from 'react';

const Whatsapp = ({ width, height, color, ...props }) => (
  // eslint-disable-next-line consistent-return
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 30"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.0037 0H14.9963C6.72563 0 0 6.7275 0 15C0 18.2812 1.0575 21.3225 2.85562 23.7919L0.98625 29.3644L6.75187 27.5213C9.12375 29.0925 11.9531 30 15.0037 30C23.2744 30 30 23.2706 30 15C30 6.72938 23.2744 0 15.0037 0Z"
      fill={color}
      fillOpacity="0.8"
    />
    <path
      d="M23.732 21.1821C23.3702 22.204 21.9339 23.0515 20.7883 23.299C20.0045 23.4658 18.9808 23.599 15.5345 22.1702C11.1264 20.344 8.28766 15.8646 8.06641 15.574C7.85453 15.2833 6.28516 13.2021 6.28516 11.0496C6.28516 8.89709 7.37828 7.84897 7.81891 7.39897C8.18078 7.02959 8.77891 6.86084 9.35266 6.86084C9.53828 6.86084 9.70516 6.87021 9.85516 6.87771C10.2958 6.89646 10.517 6.92272 10.8077 7.61834C11.1695 8.49022 12.0508 10.6427 12.1558 10.864C12.2627 11.0852 12.3695 11.3852 12.2195 11.6758C12.0789 11.9758 11.9552 12.109 11.7339 12.364C11.5127 12.619 11.3027 12.814 11.0814 13.0877C10.8789 13.3258 10.6502 13.5808 10.9052 14.0215C11.1602 14.4527 12.0414 15.8908 13.3389 17.0458C15.0133 18.5365 16.3708 19.0127 16.8564 19.2152C17.2183 19.3652 17.6495 19.3296 17.9139 19.0483C18.2495 18.6865 18.6639 18.0865 19.0858 17.4958C19.3858 17.0721 19.7645 17.0196 20.162 17.1696C20.567 17.3102 22.7102 18.3696 23.1508 18.589C23.5914 18.8102 23.882 18.9152 23.9889 19.1008C24.0939 19.2865 24.0939 20.1583 23.732 21.1821Z"
      fill="#FAFAFA"
    />
  </svg>
);
export default Whatsapp;