 import headerLogo from '../assets/images/headerLogo.png';

const Header = () => {
    return (
        <div className='container mx-auto'>
                <div className='flex justify-between py-5  border-b-2'>
                    <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                    <img src={headerLogo} alt="" />
                </div>
        </div>
    );
};

export default Header;