import React from 'react';

export const LanguageIcon: React.FC = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="language-icon"
  >
    <path
      d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
      stroke="#D1D5DB"
    />
    <text
      fill="#4B5563"
      xmlSpace="preserve"
      style={{ whiteSpace: 'pre' }}
      fontFamily="Nunito"
      fontSize="14"
      letterSpacing="0em"
    >
      <tspan x="9" y="20.606">
        ru
      </tspan>
    </text>
  </svg>
);

export const PlusIcon: React.FC = () => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="plus-icon w-5 h-5 md:w-9 md:h-9"
  >
    <circle cx="21" cy="21" r="21" fill="#1D4ED8" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9998 11.192C22.106 11.192 22.6151 12.0571 22.6151 13.1243V18.9213H29.0121C30.1183 18.9213 31.0151 19.4644 31.0151 20.5316C31.0151 21.5988 30.1183 22.1419 29.0121 22.1419H22.6151V28.583C22.6151 29.6502 22.106 30.5153 20.9998 30.5153C19.8935 30.5153 19.3844 29.6502 19.3844 28.583V22.1419H12.9875C11.8812 22.1419 10.9844 21.5988 10.9844 20.5316C10.9844 19.4644 11.8812 18.9213 12.9875 18.9213H19.3844V13.1243C19.3844 12.0571 19.8935 11.192 20.9998 11.192Z"
      fill="white"
    />
  </svg>
);

export const EditIcon: React.FC = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="edit-icon"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M14.2689 3.58579C15.0892 2.80475 16.4192 2.80475 17.2395 3.58579C18.0598 4.36684 18.0598 5.63317 17.2395 6.41422L16.4067 7.20711L13.4361 4.37869L14.2689 3.58579Z"
      fill="#1D4ED8"
    />
    <path
      d="M11.9508 5.7929L3.15082 14.1716V17H6.12145L14.9214 8.62133L11.9508 5.7929Z"
      fill="#1D4ED8"
    />
  </svg>
);

export const DeleteIcon: React.FC = () => (
  <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="delete-icon"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M19.9612 7L19.0502 19.1425C18.9717 20.1891 18.057 21 16.955 21H8.2634C7.16136 21 6.2467 20.1891 6.16818 19.1425L5.25725 7M10.5086 11V17M14.7098 11V17M15.76 7V4C15.76 3.44772 15.2898 3 14.7098 3H10.5086C9.92859 3 9.45837 3.44772 9.45837 4V7M4.20697 7H21.0114"
      stroke="#DE1A1A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
