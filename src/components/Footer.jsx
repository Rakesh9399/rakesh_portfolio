function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="border-t border-stone-800 py-4 text-center text-stone-400">
            <p>
                © {currentYear} Rakesh Prajapati | Built with React.js & Tailwind CSS
            </p>
        </div>
    );
}

export default Footer;