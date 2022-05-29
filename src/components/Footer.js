import React from 'react'

export default function Footer() {
    let FooterStyle = {
        color: "wheat",
        position: "sticky",
        width: "100%",
        bottom: "0"
    }
    return (
        <footer className='bg-dark py-2' style={FooterStyle}>
            <p className='text-center'>
                Copyright &copy; Text-Utilis.com
            </p>
        </footer>
    )
}
