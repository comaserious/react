import {createContext, useState} from 'react'
import Page from './Page'

const DarkMode = createContext(null);

function App() {

  const [isDark,setIsDark] = useState(false)


  return (
    <DarkMode.Provider value={{isDark,setIsDark}}> 
      <Page/>
    </DarkMode.Provider>
  );
}

export default App;
export {DarkMode};
