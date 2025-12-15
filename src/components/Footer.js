export default function Footer(){
    return (
        <footer className='flex items-center justify-center h-14 text-xs text-muted bg-zinc-900 border-t border-zinc-800'>
            © {new Date().getFullYear()} Aatmik Bhagat. All rights reserved. 
        </footer>
    );
}