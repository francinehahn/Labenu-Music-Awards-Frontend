import { GlobalStyle } from './GlobalStyle'
import { baseUrl } from './constants/baseUrl'
import { useRequestData } from './hooks/useRequestData'
import { Router } from './routes/Router'


function App() {
  const token = localStorage.getItem("token")
  
  if (token) {
    const [isLoadingUserData, userData, userError] = useRequestData(`${baseUrl}users/account`, true, token)
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
