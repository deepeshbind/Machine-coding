
import './index.css'
import { ProgressBar } from './components/progressBar'

function App() {

  const bars = [0, 10, 30, 50, 70, 100];

  return (
    <div>
      <h1>ProgressBar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
        ))}
    </div>
  )
}

export default App
