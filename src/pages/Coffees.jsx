import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";




const Coffees = () => {
    const data = useLoaderData()
    // console.log(data);
    const [coffees, setCoffees] = useState(data)

    const handleSort = (sortBy) => {
        if (sortBy == 'popularity') {
            // sort by popularity
            // desending -> boro theke choto-> b-a
            // ascending -> choto theke boro-> a-b
            // ekhane desending
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if (sortBy == 'rating') {
            // sort by rating
            // desending order -> boro theke choto-> b-a
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
            setCoffees(sorted)
        }
    }


    return (
        <>
            {/* ***********start************ */}
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-thin'>
                    Sort Coffee&apos;s by Popularity & Rating-&gt;
                </h1>
                <div className='space-x-4'>
                    <button
                        onClick={() => handleSort('popularity')}
                        className='btn btn-warning'
                    >
                        Sort By Popularity (DSC)
                    </button>
                    <button
                        onClick={() => handleSort('rating')}
                        className='btn btn-warning'
                    >
                        Sort By Rating (ASC)
                    </button>
                </div>
            </div>
            {/* ***********end************ */}



            {/* ***********start************ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            {/* ***********end************ */}
        </>
    );
};

export default Coffees;