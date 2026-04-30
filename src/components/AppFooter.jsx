export default function AppFooter() {
    return (
        <footer className="p-4 text-center mt-3">
            <p className="mb-1 fw-semibold">Booroad</p>
            <small className="text-muted">© {new Date().getFullYear()} Booroad — All rights reserved.</small>
        </footer>
    );
}
