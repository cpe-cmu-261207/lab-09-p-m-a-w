import Navbar from "./Navbar";

export function Template({ children }) {
    return <div className="d-flex justify-content-center" style={{ width: '100vw', height: '100vh' }}>
        <div
            className="rounded-2 justify-content-center align-self-center text-center p-5"
            style={{ background: 'rgba(255, 255, 255, 0.795)' }}
        >{children}
            <Navbar></Navbar>
        </div>
    </div>
}