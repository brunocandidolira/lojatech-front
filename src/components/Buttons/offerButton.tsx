
interface offerButtonProps{
    onClick:()=>void;
}


export function offerButton({onClick}: offerButtonProps){


return(
<button className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-100" onClick={onClick}>
 Ver ofertas
</button>

)

}