import { Link } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div className="flex justify-center">
            {/* DaisyUI Tab (lift) <a> -> <Link> */}
            <div role="tablist" className="tabs tabs-lift">
                {
                    categories.map(category => 
                    <Link 
                    key={category.category} 
                    to={`/category/${category.category}`}
                    role="tab" 
                    className="tab">
                        {category.category}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;