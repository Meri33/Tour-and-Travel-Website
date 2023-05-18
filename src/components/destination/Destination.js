import DestinationData from './DestinationData';
import './destination.css'

const Destination = () =>{
    return (
        <>
         <div className="destination">
            <h1> Popular Destinations </h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
       
              <DestinationData 
              className="first-des"
                heading="Looking for a Perfect Pakistan tours this Summer!"
                text="If you want an amazing experience in northern Pakistan, don’t wait. Talk to our agile sales team; they will make the perfect holiday package for you. The CEO of PakistanTourandTravel always feels that each client and the tour are unique. So our team listens, drafts the plan & then awaits any changes you may have. Our team consists of members with decades of experience in a remote region of Northern Pakistan. Moreover, Pakistan Tour and Travel is one of the biggest tourism companies in Pakistan, with 25 plus full-time employees."
                img1="https://plus.unsplash.com/premium_photo-1661902004576-4680d275f234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5lcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1640380340494-8fc224dadf22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VmZXJpaGlzYXIlMkZpJUNDJTg3em1pcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />

              <DestinationData 
                className="first-des-reverse"
                heading="What is the ideal time to Visit Hunza Nagar Valley in 2023?"
                text="Hunza Nagar Valley is accessible all year long, thanks to Karakoram Highway. Most visitors like to travel during summer due to the breezy weather. You will find Hunza in full bloom in June & July each year. It’s that part of the time when apples & apricot are ready to eat. Trees are laden with hunza apricot is a sight to behold. This time is ideal for trekking & adventure tours in hunza nagar valley. While trekking packages from Pakistan are not cheap, they demand high skills & dedication. 

Spring seasons bring much-needed comfort. This season welcomes tourists from Japan, Singapore, Malaysia & Thailand who wait almost one year after booking a Pakistan tour package from their native countries. Due to global warming, the spring season is shrinking each year, yet the blossom season starts in Gilgit, and you can experience the last flowers getting the bloom in Kyber Village of Gojjal, Upper Hunza. So Why Wait? Book the"
                img1="https://images.unsplash.com/photo-1507237615867-0d4d2ad6b2d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG91cmlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                img2="https://images.unsplash.com/photo-1633867113487-5118d97e546d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdXJpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />



         </div>
        </>
    )
}

export default Destination;