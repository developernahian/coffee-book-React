// import toast, { Toaster } from 'react-hot-toast';

import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')// stirngify hisebe pacchi. so nicher line e parse korechi. parse kora mane strigify formate ta ovject formate e convert kora
    // console.log(all);// stringify formate
    if(all){

        const favorites = JSON.parse(all)
        console.log(favorites); // array like object formate
        return favorites
    }
    else{
        console.log([]);
        return []
    }

    // all e age theke data thakle parse korbe and data na thakle empty array return korbe. empty array na dile null return kore so empty array diyechi jeno null na ase
    
}

// add a coffee to local storage
const addfavorite = (coffee) => {
    // console.log(coffee);
    // get all previously saved coffee data
    const favorites = getAllFavorites()

    const isExist = favorites.find(item => item.id == coffee.id)
    // if(isExist) return alert('Already Exist')
    if(isExist) return toast.error('Coffee already exist!');

    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))// local storagte e stringify kore save // ei line ta exicute howar sathe sathe browser er localStorage e coffee er data ta akta array er moddhe akta object hisebe save hobe//[{id: 12, name: "Irish Coffee",.....}]
    toast.success('Successfully created!');
    
}

// remove a coffee from local storage
const removeFavorite = (id) => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed!');
}


export { addfavorite, getAllFavorites, removeFavorite }

// [+] added get remove