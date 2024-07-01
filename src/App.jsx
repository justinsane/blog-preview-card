import './App.css';

function App() {
  return (
    <div className='mx-6 mt-24 max-w-sm md:mx-auto py-5 px-6 rounded-2xl outline outline-1  bg-white box-shadow-container'>
      <img
        src='/illustration-article.svg'
        alt='Blog Image'
        className='mx-auto rounded-xl'
      />
      <h2 className='text-sm font-bold '>
        <span className='bg-yellow py-1 px-3 rounded inline-block mt-6'>
          Learning
        </span>
      </h2>
      <h3 className='text-medium mt-2'>Published 21 Dec 2023</h3>
      <h1 className='font-bold text-2xl mt-3 leading-9'>
        HTML & CSS foundations
      </h1>
      <p className='text-grey text-md mt-3'>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className='flex flex-row items-center mt-6'>
        <img src='image-avatar.webp' alt='Avatar Image' className='w-8 ' />
        <p className='font-bold text-sm ml-3 leading-tight'>Greg Hooper</p>
      </div>
    </div>
  );
}

export default App;
