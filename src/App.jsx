import menus from './Data/data';
import TreeView from './components/TreeView';

function App() {
  return (
    <div>
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
