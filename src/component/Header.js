export default function Header() {
    return <>
        <div className="w-100 align-self-start pe-5 py-4 bg-danger">
            <div className="text-end fw-bold text-white display-6">
                <p>Your favourite tunes</p>
                <p className="fs-4">All <i className="bi bi-brightness-high-fill text-warning"></i> and all <i className="bi bi-moon-fill text-dark"></i></p>
            </div>
        </div>
    </>;
}