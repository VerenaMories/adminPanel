import {createContext} from 'react';



export let MediaContext= createContext([]);


export function MediaContextProvider(props){


  return <MediaContext.Provider  >

{props.children}
    </MediaContext.Provider>
 

}