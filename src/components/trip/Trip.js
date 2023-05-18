import "./trip.css";
import TripData from "./TripData";

function Trip () {
    return(
        <div className="trip">
<h1>Recent Trips</h1>
<p>You can discover unique destinations using Google Maps.</p>
        
        <div className="tripcard">
            <TripData
                image ="https://live.staticflickr.com/8574/28289597583_949ed222f1_b.jpg"
                heading="Trip in Neelum Valley"
                text ="Although road to Neelum valley remains open all along the year, because of border with India. Best time time to visit this heavenly beautiful valley are winter and spring season. In winters, a lot of tourists comes to enjoy the beautiful snowfall in the mountains of Kashmir. However in winters, travelers can hike to beautiful lakes of Neelum valley. Weather remains pleasant all the year."
            />
            <TripData
                image ="https://www.narankaghantours.pk/web/image/product.image/22/image_1024/6%20Days%20Naran%20Kaghan%20Shogran%20Tour%20%28Standard%20Package%29%29?unique=29c689a"
                heading="Trip in Naran Kaghan Valley"
                text ="Naran Valley is open only for 8 months from April to November throughout the year. However, In other four months, This majestic valley is closed for everyone because of heavy snowfall. Moreover, Weather condition in Naran remains cold all along the year. But the best time to travel this site is Summer. In Summers, tourists can easily travel to any part of Naran Valley."
            />
            <TripData
                image ="https://hunzaadventuretours.com/wp-content/uploads/2017/01/Fairy-meadows-Nanga-Parbat-Mountain-pakistan-1-scaled.jpg"
                heading="Trip in Fairy meadows"
                text ="Summer is the best time to travel towards astonishing Fairy meadows. As in summers one can have different and breathtaking views of destinations and the peak. However in winters, everything is closed in Fairy meadows due to massive snowfall. During summer one can see the beautiful meadows and lake surrounded by the village. Moreover, one can trek towards Biyal Camp to have some more beautiful views. Biyal camp supposed to be the first Base Camp of Nanga Parbat."
            />
        </div>
        </div>
    )
}

export default Trip;