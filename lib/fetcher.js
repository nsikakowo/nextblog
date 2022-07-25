import useSWR from "swr";


const basURL = "/";
const response = (...args) => fetch(...args).then(res => res.json());

export default function Fetcher(endpoint){
    const {data, error} = useSWR(basURL + endpoint, response)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}