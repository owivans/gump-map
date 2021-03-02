import React from 'react';
const Marker = ({ name, onSelectLocation, id, selectedLocation, img, current, lightMode }) => {
  const isShow = selectedLocation === id;
  return (
    <div>
      {isShow && !current ? (
        <div className='marker-pop'>
          <div className= {`marker-pop-picture ${lightMode && 'lightMode' }`} style={{backgroundImage: `url(${img})`}}>
          <div className='marker-pop-name'>{name}</div>
          </div>
        </div>
      ) : null}

      <div onClick={() => onSelectLocation(id)} className={`marker-main ${current && 'current'}`}></div>
      {current && <div className='pulse-current'></div>}
    </div>
  )
};

export default Marker;
