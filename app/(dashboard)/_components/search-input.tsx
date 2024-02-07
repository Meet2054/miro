"use client";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts"; // the lib is deprisiated 
import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState,
} from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";




const SearchInput = () => {

    const router = useRouter();
    const [value,setValue] = useState("");
    const debouncedValue = useDebounceValue(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue.toString(), // Convert debouncedValue to string
            },
        },{skipEmptyString:true , skipNull: true});

    router.push(url);
    }, [debouncedValue, router]);

  return (

    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transfrom -translate-y-1/2
                        text-muted-foreground h-4 w-4 "/>
      <Input className="w-full max-w-[516px] pl-9 "
      placeholder="Search boards"
      value={value}
      onChange={handleChange}
      /> 

    </div>
  )
}

export default SearchInput
