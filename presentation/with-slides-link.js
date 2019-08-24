import React from 'react';

export default function (Presentation) {
  const slidesUrl = 'Abhay Shiro | Ashwini | Prajyoti | Mahesh';
  return (props) => (
    <div>
      <div style={{
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        padding: 5,
        textAlign: 'center',
        fontSize: 20
      }}>
        <a href={slidesUrl} style={{ color: '#787878' }}>
          {slidesUrl}
        </a>
      </div>
      <Presentation {...props} />
    </div>
  );
}
