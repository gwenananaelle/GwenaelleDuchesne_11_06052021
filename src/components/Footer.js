import { ReactComponent as Logo } from '../assets/logo.svg'
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <Logo className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
