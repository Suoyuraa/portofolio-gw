import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {
  return (
    <>
    <div id="beranda" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap1 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">{/* berubah besar gambar di sini, ini untuk gambar kecil */}
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>Kegagalan Adalah Guru Terbaik Dalam Proses.🚀</q> {/* <q> unruk memnuculkan tanda kutip "" */}
        </div>
        <h1 className=" text-5xl/tight font-bold mb-6">Hi, nama saya Kang Yuna</h1>
        <p className=" text-base/loose mb-6 opacity-50">
          Saya sangat tertarik di bidang programming dan design, terutara di bidang yang baru saya ketahui seperti, 
          react.js vite.js dan tailwind css selain itu saya juga suka foto,merekam dan mengedit hasil yang saya sudah
          ambil di beberapa tempat yang telah saya kunjungi
        </p>
        <div className=" flex items-center sm:gap-4 gap-2">
          <a href="#kontak" className=" bg-violet-700  p-4 rounded-2xl hover:bg-violet-600 hover:text-black duration-500 sm:hover:scale-110 active:scale-95">Kontak saya < i class="ri-contacts-book-2-fill ri-lg"></i>
          </a>
          <a href="#proyek" className=" bg-zinc-700  p-4 rounded-2xl hover:bg-zinc-600 hover:text-black duration-500 sm:hover:scale-110 active:scale-95">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="h-[500px] w-[400px] rounded-2xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>{/* berubah besar gambar di sini */}
    </div>

    {/* Tentang */}
      <div className="tentang mt-2 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" >
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="  text-base-loose mb-10">
            Halo, perkenalkan saya Kang Yuna.
            Saya memiliki minat besar untuk menjadi seorang Full Stack Web Developer sekaligus fotografer. Saat ini, saya sedang fokus mengembangkan keterampilan saya di bidang komputer dan editing.
            Saya yakin bahwa dengan keahlian yang saya miliki, saya dapat terus meningkatkan kemampuan saya dan berharap ke depannya hobi ini bisa menjadi sumber penghasilan yang bermanfaat.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12  rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Tools mt-32"> 
          <h1 className=" text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang di pakai</h1>
          <p className=" xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4"> {/*  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1. kegunaan nya untuk di setiap kolong terisi 4 beberapa berisan seperti yang di awal 4 jadinya 4 kolom, terus 3 jadi 3 kolom dan seterusnya */}

          
            {/* {listTools.map(tool => (
              <div className="flex  items-center gap-2 p-3 border border-e-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className=" opacity-50">{tool.ket}</p>
                
              </div>
            </div>
            ))} */}
            
            {listTools.map((tool) => (
            <div
                className="flex items-center gap-2 p-3 border border-e-zinc-600 rounded-md hover:bg-zinc-800 group duration-500"
                key={tool.id}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}
                >
            <img
              src={tool.gambar}
              alt="Tools Image"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 duration-500"
            />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>

                  {/* Tampilkan link jika ada */}
                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 text-[13px]" 
                    >
                      Lihat Website
                    </a>
                  )}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    {/* Tentang */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Tutorial</h1>
      <p className="text-base text-center opacity-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut Ini Beberapa Website Yang Bisa Kalian Pelajari.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(proyek => (
          <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
          <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
          <div>
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            <p className="text-base/loose mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
              ))}
            </div>
            
            {proyek.link && (
            <div className="mt-8 text-center">
            <a href={proyek.link} target="_blank" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
            </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Proyek */}

    {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
          <h1 className=" text-4xl mb-2 font-bold text-center"  data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
          <p className="text-base/loose text-center mb-10 opacity-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Meri terhubung dengan saya.</p>
          <form action="https://formsubmit.co/muh.oshei.ss1@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan nama..." className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="10" placeholder="Pesan..."className="border border-zinc-500 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-violet-700 p-3 rounded-md w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan </button>
              </div>
            </div>
          </form>
        </div>
    {/* Kontak */}
    </>
  )   
}

export default App
