import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import './index.scss'

const Test = () => {
    return (
        <div className="test">
            <div className="test-header">
                <Header />
            </div>
            <div className="test-body">
                <Body />
            </div>
            <div className="test-footer">
                <Footer />
            </div>
        </div>
    )
}
export default Test