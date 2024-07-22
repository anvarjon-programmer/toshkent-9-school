// import React from 'react'
import img1 from '../../assets/hodimlar/img1.jpg'
// import img2 from '../../assets/raxbarImg/rahbar2.jpg'
// import img3 from '../../assets/raxbarImg/rahbar3.jpg'
// import img4 from '../../assets/emp4.png'
const MaktabRahbaryati = () => {
  return (
    <section className='bg-[#eee] mt-10'>
      <a  href="#" className="flex flex-col items-center gap-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:
 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img1 || 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz9tftw9qculFH1gxieWkxL6rbRk_hrXTSg&s"} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Халметова Шахноза Бахтиёровна</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">(1995-1999) A.Қодирий номидаги Тошкент давлат маданият институти (кундузги) ҳаваскор хор жамоалари рахбари</p>
    </div>
</a>

      
    </section>
  )
}

export default MaktabRahbaryati