import { ChicagoStars } from '../../assets/SVGs';

export default function Footer() {
    return (
        <footer className="footer flex justify-center pt-8">
            <div className='flex flex-col justify-center items-center'>
                <p className='mb-0'> Developed by Jerry Torres </p>
                <ChicagoStars />
            </div>
        </footer>
    )
}