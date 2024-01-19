import React, { useState } from 'react';
import './ContactSvg.css';

const Contact = ({ defaultColors, hoverColors, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };
  
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3006.36 1220.89" className="hoverable-svg">
      <defs>
        <clipPath id="clip-path" transform="translate(-36.94 5.02)">
          <circle cx="688.74" cy="558.7" r="369.19" fill="none" />
        </clipPath>
        <linearGradient id="linear-gradient" x1="2499.24" y1="466.28" x2="2803.03" y2="680.9" gradientUnits="userSpaceOnUse">
        {isHovered ? (
          hoverColors.map((color, index) => (
            <stop key={index} offset={(index * 0.1).toFixed(2)} style={{ stopColor: color }} />
          ))
        ) : (
          defaultColors.map((color, index) => (
            <stop key={index} offset={(index * 0.1).toFixed(2)} style={{ stopColor: color }} />
          ))
        )}
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="1435.85" y1="493.59" x2="1599.26" y2="648.82" xlinkHref="#linear-gradient" />
      </defs>
      <line x1="2267.98" y1="563.72" x2="1863.2" y2="563.72" fill="none" stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="22" />
      <path d="M688.75,915.89A357.2,357.2,0,1,1,941.32,811.27,354.86,354.86,0,0,1,688.75,915.89Z" transform="translate(-36.94 5.02)" fill={color} />
      <path d="M688.74,213.51a344.09,344.09,0,1,1-134.35,27.12,342.87,342.87,0,0,1,134.35-27.12m0-24c-203.89,0-369.19,165.29-369.19,369.19s165.3,369.19,369.19,369.19,369.2-165.29,369.2-369.19-165.3-369.19-369.2-369.19Z" transform="translate(-36.94 5.02)" fill="#020202" />
      <g clipPath="url(#clip-path)">
        <line x1="677.08" y1="13" x2="13" y2="677.08" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="725.34" y1="61.26" x2="61.26" y2="725.34" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="773.6" y1="109.51" x2="109.51" y2="773.6" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="821.85" y1="157.77" x2="157.77" y2="821.85" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="870.11" y1="206.02" x2="206.02" y2="870.11" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="918.36" y1="254.28" x2="254.28" y2="918.36" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="966.62" y1="302.53" x2="302.53" y2="966.62" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="1014.87" y1="350.79" x2="350.79" y2="1014.87" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="1063.13" y1="399.04" x2="399.04" y2="1063.13" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="1111.38" y1="447.3" x2="447.3" y2="1111.38" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="1159.64" y1="495.55" x2="495.55" y2="1159.64" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
        <line x1="1207.89" y1="543.81" x2="543.81" y2="1207.89" fill="none" stroke="#020202" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="26" />
      </g>
      <path d="M2674.11,230.51a327,327,0,1,1-127.74,25.77,326.11,326.11,0,0,1,127.74-25.77m0-41c-203.9,0-369.2,165.29-369.2,369.19s165.3,369.19,369.2,369.19S3043.3,762.6,3043.3,558.7,2878,189.51,2674.11,189.51Z" transform="translate(-36.94 5.02)" fill="#3E3939" />
      <circle cx="2637.17" cy="563.72" r="185.97" fill="url(#linear-gradient)" />
      <line x1="1021" y1="563.72" x2="1509.68" y2="563.72" fill="none" stroke="#231f20" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="22" />
      <circle cx="1509.68" cy="563.72" r="84.25" fill="url(#linear-gradient-2)" />
      <path d="M1816.23,486.45A72.26,72.26,0,1,1,1744,558.7a72.33,72.33,0,0,1,72.25-72.25m0-12a84.26,84.26,0,1,0,84.26,84.25,84.25,84.25,0,0,0-84.26-84.25Z" transform="translate(-36.94 5.02)" fill="#231f20" />
      <circle cx="1509.68" cy="401.55" r="26.43" fill="#231f20" />
      <circle cx="1779.3" cy="401.55" r="26.43" fill="#231f20" />
      <circle cx="1509.68" cy="725.89" r="26.43" fill="#231f20" />
      <circle cx="1779.3" cy="725.89" r="26.43" fill="#231f20" />
      <polyline points="1509.68 725.89 1509.68 822.45 1779.3 822.45 1779.3 725.89" fill="none" stroke="#231f20" strokeMiterlimit="10" strokeWidth="12" />
      <polyline points="1509.68 401.55 1509.68 305 1779.3 305 1779.3 401.55" fill="none" stroke="#231f20" strokeMiterlimit="10" strokeWidth="12" />
    </svg>
  );
};

export default Contact;
