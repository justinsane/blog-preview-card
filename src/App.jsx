import './App.css';

function App() {
  return (
    <div className='mx-5 max-w-sm md:mx-auto py-5 px-6 rounded-2xl outline outline-1 bg-white box-shadow-container'>
      <img
        src='/illustration-article.svg'
        alt='Blog Image'
        className='mx-auto rounded-xl'
      />
      <p className='text-sm font-bold inline-block bg-yellow py-1 px-3 rounded mt-6'>
        Learning
      </p>
      <p className='text-medium mt-2'>Published 21 Dec 2023</p>
      <a href=''>
        <h1 className='font-bold text-2xl mt-3 leading-9'>
          HTML & CSS foundations
        </h1>
      </a>
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
