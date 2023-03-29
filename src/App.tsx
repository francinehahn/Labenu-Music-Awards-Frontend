import { GlobalStyle } from './GlobalStyle'
import { useRequestData } from './hooks/useRequestData'
import { Router } from './routes/Router'


function App() {
  const token = localStorage.getItem("token")
  
  if (token) {
    const [isLoadingUserData, userData, userError] = useRequestData("https://lama-fctv.onrender.com/users/account", true, token)
    if (!isLoadingUserData && !userData && userError) {
      localStorage.removeItem("token")
    }
  }

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
