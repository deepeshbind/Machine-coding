
import './App.css'
import Stepper from './component/stepper'

function App() {

  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>
    },
    {
      label: "Account Info",
      content: <div>Account Information Content</div>
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>
    },
    {
      label: "Review Info",
      content: <div>Review Content</div>
    }
  ]

  return (
     <div>
      <Stepper steps={steps} />
     </div>
  )
}

export default App
