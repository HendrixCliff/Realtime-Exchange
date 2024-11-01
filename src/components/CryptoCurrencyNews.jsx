import { useSelector} from 'react-redux'

export default function CryptoCurrencyNews() {
    const {data8, error } = useSelector((state) => state.data)
    

    return(
        <>
         { !data8 || !data8.Data ?  
      (<div className="font-bold text-[3rem] text-[#eba3ff] text-center mt-[3em]">Loading...</div>) : error ?  (<div>Error: {error}</div>)
      : (
     
          data8.Data.map((user, index) => (
            <section className=" border-solid border-[#ff7f26] border-b-[.2em] max-md:mt-[1em] overflow-hidden" key={index}>
               
               <section className="flex gap-[1em] max-md:gap-[.5em] ">
               <img className="w-[30%] h-[10em] max-md:w-[35%] max-md:h-[14em] mt-[.5em] max-md:ml- ] ml-[3em] max-md:ml-[1em]" src={user.imageurl}/>
               <h3 className="font-bold text-center max-md:text-left max-md:text-[1.15rem] text-xl">{user.title}</h3>
            </section>
            <h5 className="text-left max-md:text-[.97rem] text-[1.09rem]">{user.body}</h5>
          </section>
          ) )
     
      )}
        </>
    )
}