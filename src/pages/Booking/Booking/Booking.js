import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'



const Booking = () => {
    const { serviceId } = useParams();

    return (
        <div className="input-card">
            <h2 className="cyb">Confirm Your Purchase</h2>
            <h2 className="id" >Purchase Id: {serviceId}</h2>
            <input type="text" className="yfn" placeholder="Your Full Name" />
            <input type="text" className="yfn" placeholder="Your Email" />
            <input type="text" className="yfn2" placeholder="Payment coming soon" /> <br /> <br />
            <Link className="confirm" to="/booked">Place Order</Link>

        </div>
    );
};

export default Booking;