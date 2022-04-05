import { useNavigate } from "react-router-dom";
import Reviews from '../HomeReviews/HomeReviews';
import useReviews from '../../hooks/useReviews'



const Home = () => {

    // data load from hook
    const [reviews] = useReviews();
    const homeReviews = reviews.slice(0, 3)
    // use navigate to button
    const navigate = useNavigate();

    return (
        <div className="mb-40">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-20 mx-10'>
                <div className='text-left m-auto ml-10'>
                    <h2 className='text-5xl font-semibold text-blue-700'>XPS Laptops</h2>
                    <h5 className='text-lg font-semibold my-5'>For Creators & Creativity | Starting at $849.99</h5>
                    <p>XPS laptops are precision crafted with premium materials, featuring stunning displays and the performance you demand to express your creative self and your big ideas.</p>
                    <div>
                        <button className='font-semibolt mt-10 px-5 mr-5 text-lg text-white bg-blue-500 border-2 rounded hover:bg-blue-700 ease-in duration-300'>Shop XPS</button>
                        <button onClick={() => navigate('/About')} className='font-semibolt mt-10 px-5 text-lg text-blue-500 bg-white border-2 rounded hover:bg-blue-500 hover:text-white ease-in duration-300'>About XPS</button>
                    </div>
                </div>
                <div>
                    <img src="xps-laptops.webp" className="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle|" alt="" />
                </div>
            </div>
            {/* Customer reviews */}
            <div>
                <h3 className="text-3xl font-semibold my-10">Customer Reviews -{homeReviews.length}</h3>
                <div className="grid grid-cols-3 gap-10 m-10">
                    {
                        homeReviews.map(review => <Reviews reviews={review}></Reviews>)
                    }
                </div>
            </div>
            <button onClick={() => navigate('/Reviews')} className='font-semibolt mt-10 px-5 mr-5 text-lg text-white bg-blue-500 border-2 rounded hover:bg-blue-700 ease-in duration-300'>See All Reviews</button>
        </div>
    );
};

export default Home;