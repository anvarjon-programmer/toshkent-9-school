import React from 'react'
import { bms } from '../services/swagger-img'
// import map from '../assets/map.jpg'
import { Link } from 'react-router-dom'

const Importantinfo = () => {
  return (
    <>
    <section className='mt-10'>
      <h1 className='text-center md:text-3xl'>BMSM to‘g‘risida asosiy ma’lumotlar</h1>
      <ul className='max-w-[850px]'>
        {
          bms.map((item,index) =>(
            <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3' key={index}>
              {item.title}
              <b>{item.addition}</b>
            </li>
          ))
        }
        <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3'>
        Aloqa telefoni:
        <b>
          <Link to='#'> (+998) 71 247 26 75</Link>   |   <Link to='#'>  97 431 55 99</Link>
        </b>
            </li>

            {/* <li className='text-sm px-4 md:text-xl m-auto max-w-[1000px] pt-3'>
        Elektron pochta manzili:
        <b>
          <Link to='bmsm34tv@gmail.com'>  musiqamaktabi95@gmail.com</Link>
        </b>
            </li> */}
      </ul>
    </section>

    <section className='mt-10 container px-4'>
      <h2 className='text-center mb-6 md:text-3xl'>Ta’lim yo‘nalishlari</h2>
    <table className="border-collapse border border-gray-400  m-auto">
            <thead className='bg-[#268382]'>
                <tr>
                    <th className="border border-gray-400 px-4 py-2">NN</th>
                    <th className="border border-gray-400 px-4 py-2">Ta'lim yo'nalishi</th>
                    <th className="border border-gray-400 px-4 py-2">Qabul yoshi</th>
                    <th className="border border-gray-400 px-4 py-2">O'qish muddati</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">1</td>
                    <td className="border border-gray-400 px-4 py-2">Fortepiano</td>
                    <td className="border border-gray-400 px-4 py-2">6-9</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">2</td>
                    <td className="border border-gray-400 px-4 py-2">Torli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-9</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">3</td>
                    <td className="border border-gray-400 px-4 py-2">Damli va zarbli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">4</td>
                    <td className="border border-gray-400 px-4 py-2">Xalq cholg'ulari</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">5</td>
                    <td className="border border-gray-400 px-4 py-2">An'anaviy cholg'u ijrochiligi</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">6</td>
                    <td className="border border-gray-400 px-4 py-2">Akademik xonandalik</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">7</td>
                    <td className="border border-gray-400 px-4 py-2">An'anaviy xonandalik</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">8</td>
                    <td className="border border-gray-400 px-4 py-2">Estrada xonandaligi</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">9</td>
                    <td className="border border-gray-400 px-4 py-2">Baxshichilik san'ati</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">10</td>
                    <td className="border border-gray-400 px-4 py-2">Estrada cholg'u ijrochiligi: fortepino, torli cholg'ular, damli va zarbli cholg'ular</td>
                    <td className="border border-gray-400 px-4 py-2">6-9, 6-11</td>
                    <td className="border border-gray-400 px-4 py-2">7 yil, 5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">11</td>
                    <td className="border border-gray-400 px-4 py-2">Xoreografiya</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">12</td>
                    <td className="border border-gray-400 px-4 py-2">Tasviriy san'at</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">13</td>
                    <td className="border border-gray-400 px-4 py-2">Amaliy san'at</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
                <tr>
                    <td className="border border-gray-400 px-4 py-2">14</td>
                    <td className="border border-gray-400 px-4 py-2">Teatr san'ati</td>
                    <td className="border border-gray-400 px-4 py-2">6-11</td>
                    <td className="border border-gray-400 px-4 py-2">5 yil</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section className="container w-full flex">
  <div className="m-auto mt-8" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47942.12381553579!2d69.25925479725498!3d41.322290004609044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef56930a91767%3A0x4283894c110cd6dd!2sMusiqa%20va%20san&#39;at%20maktabi!5e0!3m2!1sen!2s!4v1721382272386!5m2!1sen!2s"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>



    </>
  )
}

export default Importantinfo