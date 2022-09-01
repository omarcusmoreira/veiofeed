import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './global.css'

import styles from './App.module.css'
import Post from './components/Posts/Post'

function App() {

  const posts = [
    {
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        position: 'Estagiário',
      },
      content: [
        {
          type: 'text',
          text: 'Fala galeraa 👋',
        },
        {
          type: 'text',
          text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link',
          text: '👉jane.design/doctorcare',
        },
      ],
      publishedAt: new Date('2022-08-01 8:30'),
    },
    {
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        position: 'Estagiário',
      },
      content: [
        {
          type: 'text',
          text: 'Fala galeraa 👋',
        },
        {
          type: 'text',
          text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link',
          text: '👉jane.design/doctorcare',
        },
      ],
      publishedAt: new Date('2022-08-31 8:30'),
    },
]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className='feed'>
          {posts.map(post => {
            return <Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}

        </div>
      </div>
    </>
  )
}

export default App
