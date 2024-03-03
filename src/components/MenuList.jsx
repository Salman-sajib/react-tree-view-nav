/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import MenuItem from './MenuItem';

function MenuList({ list = [] }) {
  return (
    <ul className='menu-list-container'>
      {list && list.length
        ? list.map((listItem) => <MenuItem key={nanoid()} item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
