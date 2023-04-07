import React from 'react';

const PokemonItem = (props) => {
  const { num, name, image, cp, attack, defense } = props.user;

  return (
    <div className='card grid-2'>
      <div className='all-center'>
        <img
          src={image}
          alt='loading image...'
          className='round-img'
          style={{ width: '150px' }}
        />
        <h3>{name}</h3>
      </div>
      <div>
        <div>
          <div className='a'>CP : {cp}</div>
        </div>
        <div>
          <div className='a'>Attack : {attack}</div>
        </div>
        <div>
          <div className='a'>Defense : {defense}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
