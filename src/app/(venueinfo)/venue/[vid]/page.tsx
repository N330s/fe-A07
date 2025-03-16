import Image from "next/image";

export default function VenueDetail({params} : {params: {vid: string}}) {
    const mockRepo = new Map();
    mockRepo.set("001", {venueName: 'The Bloom Pavilion',  imgSrc: '/img/bloom.jpg'}); 
    mockRepo.set("002", {
        venueName:'Spark Space',
        imgSrc: '/img/grandtable.jpg' 
    }); 
    mockRepo.set("003", {
        venueName: 'The Grand Table',
        imgSrc: '/img/sparkspace.jpg' 
    }); 

    return (
        <main className="text-center p-5">
            <h1 className = 'text-lg font-medium text-black'> 
                Venue Id {params.vid}
            </h1>
            <div className="flex flex-row my-5"> 
                <Image src={mockRepo.get(params.vid).imgSrc} alt="venue" width={0} height={0} sizes ='100vw' 
                className = 'rounded-lg w-[30%]'/> 

                <div className ='text-md text-black mx-5'> {mockRepo.get(params.vid).venueName}</div>
            </div>

        </main>
    );
}

export async function generateStaticParams() {
    return [{vid: "001"}, {vid: "002"}, {vid: "003"}];
}