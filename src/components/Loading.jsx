import spinner from '../assets/netflix_spinner.webm'

export function Loading() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <video src={spinner} muted={true} autoPlay={true}/>
        </div>
    )
}