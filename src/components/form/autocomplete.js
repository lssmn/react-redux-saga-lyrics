import React from 'react';
import styles from './autocomplete.css';
import Autocomplete from 'react-autocomplete';

let key = 0;

const wrapperStyle = {
  display: 'block',
  margin: 'var(--gutter-xl) 0 var(--gutter-l)',
};

const menuStyle = {
  position: 'absolute',
  zIndex: 1,
  margin: '0 0 var(--gutter-xl)',
  width: 'var(--gutter-s)',
  boxSizing: 'border-box',
  borderRadius: '0',
  border: 'var(--border-width-s) solid var(--color-secondary)',
  borderTopWidth: 0,
};

export function renderAutocompleteItem(item, isHighlighted) {
  const { artist, album, title } = item;

  return (
    <div
      key={`key_${++key}`}
      className={`${styles.item} ${
        isHighlighted && styles.highlight
      }`}>
      <img src={album.picture} className={styles.picture} />
      <div className={styles.container}>
        <div className={styles.song}>
          {artist} - {title}
        </div>
        <div className={styles.album}>
          Album: {album.title}
        </div>
      </div>
    </div>
  );
}

export const AutoComplete = props => (
  <Autocomplete
    getItemValue={item => item.title}
    renderItem={renderAutocompleteItem}
    menuStyle={menuStyle}
    wrapperStyle={wrapperStyle}
    {...props}
  />
);

export default AutoComplete;
