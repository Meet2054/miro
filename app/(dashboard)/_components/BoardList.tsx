"use client";

import EmptySearch from "./EmptySearch";
import EmptyFavorites from "./EmptyFavorites";
import EmptyBoards from "./EmptyBoards";

interface BoardListProps {
    orgId: string;
    query:{
        favorites?: string;
        search?: string;
    }
}

const BoardList = ({orgId, query}:BoardListProps) => {

    const data =[];  //Todo API call to get data

    if(!data?.length && query.search){
        return <EmptySearch/>
          
    }

    if(!data?.length && query.favorites){
        return <EmptyFavorites/>
        
    }

    if(!data?.length){
        return <EmptyBoards/>
    }

  return (
    <div>
            {JSON.stringify(query)}

    </div>
  )
}

export default BoardList
