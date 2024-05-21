import spinner from '../assets/netflix_spinner.gif'

export function Loading() {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <img src={spinner}/>
        </div>
    )
}