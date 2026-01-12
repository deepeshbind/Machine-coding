
import './App.css'
import FileExplorer from './component/FileExplorer'
import data from './data.json'

function App() {

  return (
    <div>
      <FileExplorer folderData={data} />
    </div>
  )
}

export default App
