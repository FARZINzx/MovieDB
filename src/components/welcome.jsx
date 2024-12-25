

export default function Welcome(){
 return (
     <section className='min-h-screen min-w-screen bg-custom-radial'>
      <div className='w-full h-svh flex items-center justify-center'>
       <figure className='md:w-[305px] md:h-[234px] w-[125px] h-[184px] '>
        <img
            className='w-full h-full object-contain animate-pulse'
            src='/src/assets/logo.png'
            alt='logo' />
       </figure>
      </div>
     </section>
 )
}