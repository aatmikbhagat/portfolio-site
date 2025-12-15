export default function Footer(){
    return (
        <footer className='flex items-center justify-center h-10 text-xs bg-black'>
            © {new Date().getFullYear()} Aatmik Bhagat. All rights reserved. 
        </footer>
    );
}