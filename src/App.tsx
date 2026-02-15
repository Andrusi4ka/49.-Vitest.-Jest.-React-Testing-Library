import './App.css'
import UserProfile from './components/UserProfile';
import animation from './assets/animation.gif';

function App() {

  return (
    <>
      <h1>Тестування асинхронної логіки React-компонентів</h1>
      <p>API <a target='blant' href="https://jsonplaceholder.typicode.com/users/1">https://jsonplaceholder.typicode.com/users/1</a></p>
      <UserProfile />
      <img src={animation} alt="video" />
    </>
  )
}

export default App
