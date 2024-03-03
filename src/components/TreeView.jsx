/* eslint-disable react/prop-types */
import MenuList from './MenuList';
import './treeview.css';

function TreeView({ menus = [] }) {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
