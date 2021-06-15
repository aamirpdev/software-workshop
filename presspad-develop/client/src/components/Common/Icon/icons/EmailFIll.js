import React from 'react';

const EmailFill = ({ width, height, color, ...props }) => (
  // eslint-disable-next-line consistent-return
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 11"
    fill={color || 'none'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.4444 0.34375H2.58281C2.14704 0.344215 1.72926 0.517216 1.42112 0.824792C1.11299 1.13237 0.939675 1.5494 0.939209 1.98437V9.01562C0.939675 9.4506 1.11299 9.86763 1.42112 10.1752C1.72926 10.4828 2.14704 10.6558 2.58281 10.6562H12.4444C12.8802 10.6558 13.2979 10.4828 13.6061 10.1752C13.9142 9.86763 14.0875 9.4506 14.088 9.01562V1.98437C14.0875 1.5494 13.9142 1.13237 13.6061 0.824792C13.2979 0.517216 12.8802 0.344215 12.4444 0.34375ZM12.0282 3.05752L7.80181 6.33877C7.7194 6.40272 7.61799 6.43744 7.5136 6.43744C7.40921 6.43744 7.3078 6.40272 7.22538 6.33877L2.99899 3.05752C2.94933 3.02009 2.90762 2.97318 2.87629 2.91952C2.84495 2.86586 2.82461 2.80652 2.81645 2.74494C2.80828 2.68336 2.81246 2.62078 2.82874 2.56083C2.84502 2.50088 2.87307 2.44476 2.91126 2.39573C2.94946 2.34669 2.99703 2.30572 3.05123 2.2752C3.10542 2.24468 3.16515 2.22521 3.22694 2.21793C3.28874 2.21065 3.35137 2.2157 3.41119 2.23279C3.47102 2.24988 3.52684 2.27867 3.57542 2.31748L7.5136 5.3749L11.4518 2.31748C11.5502 2.24325 11.674 2.21069 11.7964 2.22685C11.9187 2.24301 12.0298 2.30658 12.1055 2.40383C12.1812 2.50107 12.2156 2.62416 12.2011 2.74649C12.1867 2.86882 12.1246 2.98055 12.0282 3.05752Z"
      fill="#0A3159"
    />
  </svg>
);
export default EmailFill;