
import React, { createContext, useContext, useReducer } from 'react';
import { globalReducer } from '../reducers/reducers';
import wishlist from "../../pages/wishlist";

export const initialState = {
    products: [
        {
            id: '1',
            name: 'Product 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            price: '1500',
            img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
            slideImg: [
                {
                    src: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
                    alt: 'IMG_1'
                },
                {
                    src: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
                    alt: 'IMG_2'
                },
                {
                    src: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
                    alt: 'IMG_3'
                },
                {
                    src: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
                    alt: 'IMG_4'
                },
                {
                    src: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
                    alt: 'IMG_5'
                }
            ],
            parameter: ["E 30", "Black", "USA, Europe"],
        },
        {
            id: '2',
            name: 'Product 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            price: '1400',
            img: 'https://picserio.com/data/out/62/bmw-e30-wallpaper_2845122.jpg',
            parameter: ["E 30", "Black", "Russia, Europe"],
        },
        {
            id: '3',
            name: 'Product 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            price: '1600',
            img: 'https://wallup.net/wp-content/uploads/2016/01/208236-car-vehicle-BMW-BMW_E30-748x468.jpg',
            parameter: ["E 30", "Black", "USA, Europe"],
        },
        {
            id: '4',
            name: 'Product 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            price: '1700',
            img: 'http://wallpapers.net/web/wallpapers/bmw-e30-hd-wallpaper/thumbnail/lg.jpg',
            parameter: ["E 30", "Black", "Europe"],
        },
        {
            id: '5',
            name: 'Product 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            price: '1500',
            img: 'http://sf.co.ua/14/04/wallpaper-1927547.jpg',
            parameter: ["E 30", "Black", "Russia"]
        }
    ],
    cart: [],
    wishlist: [],
}

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

function useGlobalState() {
    const context = useContext(GlobalStateContext);

    if (context === undefined) {
        throw new Error("useGlobalState must be used GlobalProvider")
    }

    return context;
}

function useGlobalDispatch() {
    const context = useContext(GlobalDispatchContext);

    if (context === undefined) {
        throw new Error("useGlobalDispatch must be used GlobalProvider")
    }

    return context;
}

export const useGlobal = () => [ useGlobalState(), useGlobalDispatch() ];

export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}
