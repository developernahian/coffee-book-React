import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div className="flex justify-center">
            {/* DaisyUI Tab (lift) <a> -> <Link> */}
            <div role="tablist" className="tabs tabs-lift">
                {
                    categories.map(category => 
                    <NavLink 
                    key={category.category} 
                    to={`/category/${category.category}`}
                    role="tab" 
                    className={({isActive})=> `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`}>
                        {category.category}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;