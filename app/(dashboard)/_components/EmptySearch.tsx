import Image from "next/image";


const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-search.svg"}
        height={240}    
        width={240}
        alt="empty search"
        />
        <h2 className="mt-6 text-semibold text-2xl">No Results Found!</h2>
        <p className="text-muted-foreground  textg-sm mt-2 ">Try searching for something else</p>
    </div>
  )
}

export default EmptySearch
