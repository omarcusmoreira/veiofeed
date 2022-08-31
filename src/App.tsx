import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './global.css'

import styles from './App.module.css'
import Post from './components/Posts/Post'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className='feed'>
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
