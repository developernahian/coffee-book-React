import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    //useParams() url link ta pawr jonno use hoy
    const { category } = useParams()
    // console.log(category);
    // console.log(data);
    const [coffees, setCoffees] = useState([])
    // useEffect(()=>{},[])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category == category)
            setCoffees(filteredByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])
    // inital all data show korbe. but first 6 ta data. so slice korechi
    // category button e click korle category data show korbe.
    // initial e category exitst kore na so all data show korbe. and category butoon e click korle  category exist kore so category data show korbe... 


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>

                {/* [+] navigate */}
            <button className="btn btn-warning" onClick={()=> navigate('/coffees')}>View All</button>
        </>
    );
};

export default CoffeeCards;