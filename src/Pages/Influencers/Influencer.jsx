import './Influencer.css';
import Benefits from '../../Components/Benefits/Benefits';
import YtVideos from '../../Components/Youtube/Youtube';


export const Influencer=()=>{
    return(
        <div className='InfluencerContainer'>
            <div className='InfluencerHead'>
                <h3 style={{fontSize:"2em"}}>
                    Store code for Influencers
                </h3>
                <p style={{fontSize:'1.7em',padding:'5%',fontFamily:'playfair display'}}>
                    At Storecode, we recognize the incredible impact of influencers in today's digital landscape. We believe in empowering influencers and turning their influence into a sustainable and rewarding venture. Our Storecode for Influencers program is designed to do just that.
                </p>
            </div>

            <div>
                <Benefits/>
            </div>
            <h1  className='Rainbow'>
                Your Store, Your Influence, Your Earnings
            </h1>
            <div>
                <YtVideos/>
            </div>
           <div className='JoinForm'>
            
                <a href='https://storecode.in/register.php' className='Register' >
                    <h3>
                        Register Now 
                    </h3>
                </a>
               
           </div>
            
        </div>
    )
}

