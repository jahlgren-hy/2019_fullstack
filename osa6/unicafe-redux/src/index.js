import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducer'

const store = createStore(reducer)

const renderApp = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)

/*

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  store.getState()

  return (

    <div>

      <button onClick={e => store.dispatch({ type: 'GOOD' })}>
        hyvä
        </button>
      <button onClick={e => store.dispatch({ type: 'OK' })}>
        neutraali
        </button>
      <button onClick={e => store.dispatch({ type: 'BAD' })}>
        huono
        </button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>
        nollaa tilastot
        </button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

*/
