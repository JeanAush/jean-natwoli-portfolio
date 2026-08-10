export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jean Natwoli. All systems operational.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="mailto:natwolijean@gmail.com" className="text-gray-200 font-medium hover:text-accent-light transition-colors">natwolijean@gmail.com</a>
          <a href="tel:0759304400" className="text-gray-200 font-medium hover:text-accent-light transition-colors">0759304400</a>
        </div>
      </div>
    </footer>
  );
}