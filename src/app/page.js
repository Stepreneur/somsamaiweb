"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf, Users, Award, Clock } from 'lucide-react';
import Image from 'next/image';

const GrassSellingWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
      AOS.init({
      duration: 200,       // Animation duration
      easing: 'ease-in-out', // Easing pattern
      once: true,          // Whether animation should happen only once
      mirror: false,       // Whether elements should animate out while scrolling past them
    });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const grassProducts = [
    {
      name: 'หญ้านวลน้อย',
      description: 'หญ้าคุณภาพสูง เหมาะสำหรับสนามหญ้าทั่วไป ทนแล้ง ทนเหยียบย่ำ',
      image: '/product/nuannoy.jpg'
    },
    {
      name: 'หญ้าญี่ปุ่น',
      description: 'หญ้าเกรดพรีเมี่ยม นุ่ม สีเขียวสวย เหมาะสำหรับสนามกอล์ฟ',
      image: '/product/japan.jpg'
    },
    {
      name: 'หญ้ามาเลเซีย',
      description: 'หญ้าใบหนา ทนร้อน เหมาะสำหรับภูมิอากาศเมืองไทย ชอบอยู่ในแดดรำไรและสามารถปลูกกลางแดดได้',
      image: '/product/malaysia.jpg'
    },
    {
      name: 'หญ้าพลาสพาลั่ม',
      description: 'หญ้าใบแคบ ทนแล้ง เหมาะสำหรับพื้นที่แห้งแล้ง',
      image: '/product/plaspalum.jpg'
    },
    {
      name: 'หญ้าเมอร์บิวด้า',
      description: 'หญ้าทนทาน เจริญเติบโตเร็ว เหมาะสำหรับสนามกีฬา',
      image: '/product/bermuda.jpg'
    },
    {
      name: 'หญ้าไทเปย์',
      description: 'หญ้าใบเล็ก สีเขียวเข้ม เหมาะสำหรับการตกแต่ง',
      image: '/product/thaipay.jpg'
    }
  ];

  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'บริการขายหญ้า',
      description: 'หญ้าคุณภาพสูงหลากหลายชนิด ราคาหน้าสวนไม่ผ่านแม่ค้าคนกลาง ส่งทั่วประเทศ มีเก็บปลายทาง',
      image: '/img/allgrass.png',
      href : '#products'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'จัดและตัดแต่งสวน',
      description: 'บริการปลูกหญ้า เคลียริ่ง ปรับพื้นที่ โดยช่างมากประสบการณ์กว่า 10 ปี',
      image: '/img/garden.png',
      href : 'https://line.me/ti/p/zSV34qgq4u'
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'จัดหาต้นไม้',
      description: 'รับจัดหาคัดสรรต้นไม้ทุกชนิด ช้อนเงินช้อนทอง',
      image: '/img/tree.png',
      href : 'https://line.me/ti/p/zSV34qgq4u'
    },
   
  ];

  const portfolioItems = [
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหญ้านวลน้อยถึงบ้าน', image:'/img/rev1.jpg' },
    { title: 'จัดส่งต้นไม้', description: 'คัดสรรและจัดส่งต้นไม้เกรดคุณภาพ',image:'/img/rev5.jpg'},
    { title: 'สวนหิน', description: 'จัดสวนหินผสมผสานกับหญ้าเขียว',image:'/img/rev3.jpg'},
    { title: 'หญ้าข้างสระน้ำ', description: 'ปูหญ้าข้างสระน้ำ', image:'/img/rev4.jpg'},
    { title: 'หญ้าสนามกีฬา', description: 'ปูหญ้าสนามฟุตบอลขนาดมาตรฐาน',image:'/img/rev2.jpg' },
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหน้าบ้าน', image:'/img/rev6.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrollY > 680
      ? 'bg-green-950/90 backdrop-blur-sm shadow-md border-b border-green-700'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end sm:justify-center items-center">

    {/* เมนู Desktop/iPad (md ขึ้นไป) */}
    <div className="hidden sm:flex space-x-8 items-center">
      {[
        { label: 'หน้าแรก', href: '/' },
        { label: ' | ', isDivider: true },
        { label: 'บริการ', href: '/#services' },
        { label: ' | ', isDivider: true },
        { label: 'สินค้า', href: '/#products' },
        { label: ' | ', isDivider: true },
        { label: 'ผลงาน', href: '/portfolio' },
        { label: ' |    ', isDivider: true },
        { label: 'ติดต่อ', href: '/contact' },
      ].map((item, index) =>
        item.isDivider ? (
          <span
            key={index}
            className="text-white select-none pointer-events-none"
          >
            |
          </span>
        ) : (
          <a
            key={index}
            href={item.href}
            className="text-white hover:text-green-300 transition-colors duration-300"
          >
            {item.label}
          </a>
        )
      )}
    </div>

    {/* ปุ่ม Hamburger (มือถือ) */}
    <div className="sm:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white focus:outline-none"
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* เมนูมือถือ */}
  {menuOpen && (
    <div className="md:hidden bg-green-950/90 backdrop-blur-sm border-t border-green-700 px-6 py-4 space-y-4">
      {[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บริการ', href: '/#services' },
        { label: 'สินค้า', href: '/#products' },
        { label: 'ผลงาน', href: '/portfolio' },
        { label: 'ติดต่อ', href: '/contact' },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block text-white hover:text-green-300 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-30">
  <Image
    src="/img/hero1.jpg"
    alt="ภาพหลัก"
    fill
    className="object-cover opacity-45"
    quality={100}
    priority
  />

  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 sm:px-10">
    <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
      ขายหญ้าจัดสวน<span className="block sm:inline">ทุกชนิด</span>
    </h1>

    <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-300 leading-relaxed sm:leading-normal">
      หมดปัญหา พื้นที่รกร้าง ไม่มีชีวิตชีวา
      <br className="hidden sm:block" />
      ด้วยบริการ หญ้าจัดสวนทุกชนิดเกรดคัดสรรคุณภาพสูง และจัดสวนครบวงจร ทั่วประเทศ
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
      <a
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        href="#services"
        className="w-full sm:w-auto text-center bg-gradient-to-r from-green-400 to-yellow-500 hover:from-transparent hover:to-transparent box-border hover:border hover:border-green-500 text-white hover:text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      >
        ดูบริการที่เรามี
      </a>

      <a
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        href="tel:0801738530"
        className="w-full sm:w-auto text-center bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
      >
        <Phone className="inline w-5 h-5 mr-2" />
        โทรเลย 080-173-8530
      </a>
    </div>

    {/* Product Benefits */}
    <div className="mb-30 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 mt-12 sm:mt-16 animate-fade-in-up animation-delay-400 px-4 sm:px-0">
      {[
        {
          icon: '🚛',
          title: 'ส่งทั่วประเทศ',
          desc: 'มีเก็บปลายทาง (ขอมัดจำก่อน)',
        },
        {
          icon: '🌿',
          title: 'หญ้าจัดสวนทุกชนิด',
          desc: 'ส่งจริงแล้วกว่า 3,500 ออเดอร์ – ลูกค้าทั่วไทยไว้วางใจ',
        },
        {
          icon: '🧑🏿‍🌾',
          title: 'จัดสวนครบวงจร',
          desc: 'ประสบการณ์จัดสวนกว่า 10 ปี – งานเนียบ ส่งไว ดูแลครบ',
        },
      ].map((item, i) => (
        <div
          key={i}
          className= " bg-black/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 text-left text-sm sm:text-base"
        >
          <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
          <div className="border-b border-white/20 mb-2 hidden sm:block"></div>
          <p className="block sm:hidden">{item.desc.slice(0, 40)}...</p>
          <p className="hidden sm:block">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-20 sm:px-20 md:px-16 lg:px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-green-800 mb-6"><span className='text-4xl'>🌲</span> บริการของเรา</h2>
            <p className="text-4xl text-black font-bold">เราช่วยเติมความสดชื่น<span className='block mt-2'>ให้ทุกพื้นที่ของคุณ</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
  >
    <div className="text-green-800 mb-4 transition-transform duration-300">
      {service.icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
    
    <Image
      src={service.image}
      alt={service.title}
      width={500}
      height={250}
      className="rounded-2xl w-full h-55 object-cover group-hover:scale-105 transition-transform duration-300 mt-5 "
    />

    {/* CTA Button */}
 <a data-aos="zoom-in"
  data-aos-delay="300"
  data-aos-duration="400"
  data-aos-easing="ease-in-out"
  href={service.href}
  className="group inline-flex items-center justify-center mt-6 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-green-700 border border-green-600 shadow-sm hover:bg-green-600 hover:text-white hover:shadow-lg transition-all duration-300"
>
  <span className="text-sm sm:text-base font-medium tracking-wide">
    {service.title === 'บริการขายหญ้า' ? 'เลือกชมหญ้า' : 'สอบถามทางไลน์'}
  </span>
  <svg
    className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>
  </div>
))}

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-6"><span className='text-4xl'>🌿</span>หญ้าที่เราขาย</h2>
            <p className="text-4xl text-black font-bold">หญ้าเกรดคัดสรรคุณภาพสูง<span className='block mt-2'>พร้อมจัดส่งทั่วประเทศ</span></p>
            <p className="text-sm text-gray-500 mt-6">👤 ยอดขายมากกว่า 3,500 ออเดอร์ทั่วไทย ลูกค้ายืนยันคุณภาพ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grassProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                <Image
                src={product.image}
                alt="product"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                 <div className="w-full flex justify-center">
  <div className="flex gap-4 items-center">
    <a href='https://line.me/ti/p/zSV34qgq4u' target='_blank' className="group inline-flex items-center gap-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm md:text-base px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
      <img
        src="/img/line.webp"
        className="transition-transform group-hover:-translate-y-[1px] w-8 h-8 rounded-2xl"
        alt="ไลน์"
      />
      สอบถามราคา
    </a>
    <a
      href="tel:0801738530"
      className="group inline-flex items-center gap-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium text-sm md:text-base px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Phone className="w-5 h-5 group-hover:-translate-y-[1px] transition-transform" />
      
    </a>
  </div>
</div>

                </div>
              </div>
            ))}
          </div>

          {/* Product Features */}
             <div className="mt-12 text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
  ไม่ว่าคุณจะอยู่จังหวัดไหน เรามีบริการจัดส่งหญ้าคุณภาพถึงหน้าบ้าน  
  หรือหากต้องการปลูกด้วยตนเอง เรายินดีแพ็คส่งถึงที่  
  <span className="block mt-2">
    🌱 แวะชมตัวอย่างหญ้าจริงได้ที่สวนของเรา ก่อนตัดสินใจสั่งซื้อ
  </span>
</div>
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">

  {/* รีวิวผลงาน Button */}
  <a data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
    href="/portfolio"
    className="relative group bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 p-1 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300"
  >
    <div className="flex items-center gap-8 bg-white rounded-[calc(1.5rem-4px)] p-5 sm:p-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-emerald-400 blur-lg opacity-30 rounded-full animate-pulse"></div>
        <div className="relative z-10 text-green-700 text-3xl p-3 rounded-full bg-emerald-100 shadow-inner">
          📸
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-green-800 group-hover:text-green-900">
          ภาพผลงาน
        </p>
        <p className="text-sm text-gray-500">
          กว่า 3,500 งานที่เราภูมิใจ แค่คลิกก็เห็นภาพชัดเจน
        </p>
      </div>
    </div>
  </a>

  {/* แผนที่สวน Button */}
  <a data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
    href="https://www.google.com/maps/place/14%C2%B001'22.5%22N+100%C2%B053'25.9%22E/@14.022903,100.8879441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.022903!4d100.890519?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group bg-gradient-to-r from-gray-100 via-white to-gray-50 p-1 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300 border border-green-200"
  >
    <div className="flex items-center gap-8 bg-green-700 rounded-[calc(1.5rem-4px)] p-5 sm:p-6 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-white blur-lg opacity-10 rounded-full animate-pulse"></div>
        <div className="relative z-10 bg-white text-green-700 text-3xl p-3 rounded-full shadow-inner group-hover:bg-green-100">
          📍
        </div>
      </div>
      <div>
        <p className="text-lg font-bold">
          มาชมหญ้าที่สวนเรา
        </p>
        <p className="text-sm text-green-100">
          ดูพิกัดชัด ๆ บน Google Maps กดแล้วพามาเลย
        </p>
      </div>
    </div>
  </a>

</div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
           <h2 className="text-2xl font-bold text-green-800 mb-6"><span className='text-3xl'>📗</span>ผลงาน</h2>
            <p className="text-4xl text-black font-bold">ประสบการณ์ทำงานมากกว่า 10 ปี<span className='block mt-2'>ผู้ซื้อจริงมากกว่า 3500 รายการทั่วไทย</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
              <Image
              className="rounded-2xl object-cover aspect-[3/4] w-full h-auto"
              src={item.image}
              width={400}
              height={533} // 3:4 ratio
              alt="product"
             />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       <div className="mt-16 flex justify-center px-4">
  {/* รีวิวผลงาน Button */}
  <a data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
    href="/portfolio"
    className="relative group bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 p-1 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300"
  >
    <div className="flex items-center gap-8 bg-white rounded-[calc(1.5rem-4px)] p-5 sm:p-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-emerald-400 blur-lg opacity-30 rounded-full animate-pulse"></div>
        <div className="relative z-10 text-green-700 text-3xl p-3 rounded-full bg-emerald-100 shadow-inner">
          📸
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-green-800 group-hover:text-green-900">
          ภาพผลงานทั้งหมด   
        </p>
        <p className="text-sm text-gray-500">
          กว่า 3,500 งานที่เราภูมิใจ แค่คลิกก็เห็นภาพชัดเจน
        </p>
      </div>
    </div>
  </a>
</div>

      </section>

      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-4"><span className="text-2xl">📞</span> ติดต่อเรา</h2>
      <p className="text-3xl font-bold text-gray-800">พร้อมให้บริการ <span className="text-green-700">ทุกวัน</span> ทั่วประเทศ</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      
    <a href="https://line.me/ti/p/zSV34qgq4u" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
      <img src="/img/line.webp" alt="LINE Logo" className="w-6 h-6 mx-auto mb-3" />
      <p className="font-bold text-gray-800">แชททาง LINE</p>
      <p className="text-green-600">id : jirayut6812</p>
    </a>

    <a href="tel:0801738530" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <Phone className="w-8 h-8 mx-auto text-green-600 mb-3" />
        <p className="font-bold text-gray-800">โทรด่วน</p>
        <p className="text-green-600 text-lg">080-173-8530</p>
    </a>

  
      <a href="https://www.facebook.com/profile.php?id=61577147002093&rdid=C8z1HUrWIJQu15ik&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15yK1jepgU%2F#" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <img src="/img/facebook.webp" alt="Facebook Logo" className="w-6 h-6 mx-auto mb-3" />
        <p className="font-bold text-gray-800">Facebook Page</p>
        <p className="text-green-600">ไร่หญ้าสมสมัยการ์เด้น.com </p>
      </a>

       <a href="https://www.tiktok.com/@jirayut6112546?_t=ZS-8wrp3jqXqUb&_r=1" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <img src="/img/tiktok.webp" alt="TikTok Logo" className="w-10 h-10 mx-auto mb-3" />
        <p className="font-bold text-gray-800">ติดตามใน TikTok</p>
        <p className="text-green-600">jirayut6112546</p>
      </a>

      <a href="https://www.google.com/maps/place/14%C2%B001'22.5%22N+100%C2%B053'25.9%22E/@14.022903,100.8879441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.022903!4d100.890519?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <MapPin className="w-8 h-8 mx-auto text-green-600 mb-3" />
        <p className="font-bold text-gray-800">เยี่ยมชมสวน</p>
        <p className="text-green-600">เปิดทุกวัน จ.-อา.</p>
      </a>
    </div>

    <p className="text-center text-gray-500 text-sm mt-12">
      รับงานทั่วประเทศ — คิดถึงหญ้า คิดถึงเรา 🌿
    </p>
  </div>
</section>


      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://line.me/ti/p/zSV34qgq4u"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-16 h-16 bg-[#00C300] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
  >
    <img
      src="/img/line.webp"
      alt="LINE"
      className="w-8 h-8 rounded-2xl"
    />
    <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
      แชทผ่าน LINE
    </span>
  </a>
</div>


      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </div>
  );
};

export default GrassSellingWebsite;