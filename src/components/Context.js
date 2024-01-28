import React, { useContext, createContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

// ===============================  //

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: " "});
    const [searchQuery, setSearchQuery] = useState('Avengers');

    //======== Home Page for Movie site without search /========/
    
    const getMovies = async (url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if(data.Response === "True"){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: "",
                })
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovies(`${API_URL}&s=${searchQuery}`);
        }, 800);

        return () => clearTimeout(timer);
    }, [searchQuery])

    //======== Home Page for Movie site without search /========/
    
    return <AppContext.Provider value={{ isLoading, movie, isError, searchQuery, setSearchQuery}}>
            {children}
            </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext, API_URL };