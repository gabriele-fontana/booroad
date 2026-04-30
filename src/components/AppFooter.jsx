export default function AppFooter() {
    return (
        <footer className="p-4 text-center mt-3">
            <p className="mb-1 fw-semibold"><i className="bi bi-backpack2"></i> BooRoad</p>
            <small className="text-muted">{new Date().getFullYear()} &copy; All rights reserved.</small>
        </footer>
    );
}
