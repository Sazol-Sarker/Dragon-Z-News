import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    const displayDate=moment().format('dddd, MMMM D, YYYY');
    
    // console.log(displayDate);
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <h2>Header</h2> */}
            <div className="img-container">

            <img src={logo} className='w-[300px]' alt="Dragon News" />
            </div>
            <h3 className='text-lg'>Journalism Without Fear or Favour</h3>
            <h3>{displayDate}</h3>
        </div>
    );
};

export default Header;