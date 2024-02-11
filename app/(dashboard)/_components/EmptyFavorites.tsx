import Image from "next/image"


const EmptyFavorites = () => {
  return (
      <div className="h-full flex flex-col items-center justify-center">
            <Image
              src={"/empty-favorites.svg"}
              alt="empty favorites"
              height={240}    
              width={240}
              className="mt-[100px]"
              />
              <h2 className="mt-6 text-semibold text-2xl">No favorites found</h2>
              <p className="text-muted-foreground  textg-sm mt-2 ">Create your favorites first.</p>
        </div>
  )
}

export default EmptyFavorites
