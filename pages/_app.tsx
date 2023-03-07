import '../styles/globals.css';
import { store } from '../store';
import { Provider } from 'react-redux'

//bluprint인것이다. global css 파일을 넣는다던지 글로벌한것들만 넣는게 좋다.

function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    )
        
}

export default App;