export function Card(props){
    return(
        <div class="bg-black text-white mx-5 p-2 flex flex-col items-center rounded-md shadow-md shadow-[rgb(37,75,29)]" >
            {props.children}
        </div>
    )
}

  