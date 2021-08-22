import {Footer, Header} from '../components'

export default function Layout(props) {
    return(
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}