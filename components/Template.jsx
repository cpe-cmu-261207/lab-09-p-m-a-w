import Navbar from "./Navbar";

export function Template({ children }) {
    return <div className="text-center">
        {/* <div className="display-4 my-4">Hello world 555+</div> */}
        <Navbar></Navbar>
        {children}
    </div>
}