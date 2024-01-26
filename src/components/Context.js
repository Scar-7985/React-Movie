import React, { useContext, createContext, useEffect, useState } from "react";

const API_URL = 'http://www.omdbapi.com/?apikey=3c6be4a3&s=Avengers';

const AppContext = createContext();

// ===============================  //

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: " "});

    //======== Home Page for Movie site without search /========/
    
    const getMovies = async (url) => {

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        getMovies(API_URL);
    }, [])

    //======== Home Page for Movie site without search /========/
    
    return <AppContext.Provider value={{ isLoading, movie, isError}}>
            {children}
            </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };