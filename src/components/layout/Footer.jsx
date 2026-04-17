import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#e9ecef] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between items-center text-sm text-brand-purple font-medium gap-4">
        
        {/* Логотип */}
        <Link href="/">
          <img src="/logo.png" alt="I feel you" className="h-8 object-contain cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
        
        {/* Центральные ссылки */}
        <div className="flex gap-8">
          <Link href="/about" className="hover:text-brand-dark transition">Біз туралы</Link>
          <Link href="#contact" className="hover:text-brand-dark transition">Байланыстар</Link>
        </div>

        {/* Иконки соцсетей (с добавленными SVG) */}
        <div className="flex items-center justify-center gap-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/ifeelyou.kz?igsh=MWdzZ3BlYmRiemZoaQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          
          {/* Telegram */}
          <a href="https://t.me/asemokkoi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm5.894-16.481l-1.927 9.07c-.145.642-.53.804-1.066.502l-2.946-2.17-1.42 1.368c-.157.157-.291.292-.596.292l.211-3.006 5.474-4.944c.238-.213-.053-.33-.368-.12l-6.764 4.256-2.915-.909c-.633-.198-.646-.633.133-.94l11.41-4.398c.528-.198 1 .118.774.999z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/77718882005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.996 0A12 12 0 000 12c0 2.122.55 4.116 1.523 5.861L.004 24l6.3-1.65A11.964 11.964 0 0011.996 24C18.624 24 24 18.623 24 12c0-6.623-5.376-12-12.004-12zm.006 20.086c-1.748 0-3.415-.45-4.887-1.303l-.35-.205-3.633.953.97-3.535-.227-.36A8.04 8.04 0 013.924 12c0-4.454 3.626-8.08 8.082-8.08 4.456 0 8.08 3.626 8.08 8.08 0 4.455-3.624 8.086-8.08 8.086zm4.437-5.918c-.243-.122-1.438-.708-1.66-.79-.22-.08-.383-.122-.544.122-.16.243-.625.79-.766.953-.14.16-.282.18-.525.06-.243-.122-1.026-.378-1.954-1.205-.722-.644-1.21-1.44-1.353-1.683-.142-.243-.015-.375.106-.497.109-.11.243-.284.364-.426.12-.143.16-.243.24-.405.082-.162.042-.304-.018-.426-.06-.122-.544-1.314-.745-1.802-.196-.475-.395-.41-.544-.418l-.465-.008c-.16 0-.426.06-.648.304-.223.243-.852.83-.852 2.025s.872 2.35.993 2.512c.122.16 1.71 2.612 4.14 3.664 2.43 1.052 2.43.708 2.875.667.446-.04 1.438-.587 1.64-1.155.202-.568.202-1.052.14-1.155-.06-.103-.222-.164-.465-.286z"/>
            </svg>
          </a>
        </div>

        <div className="text-gray-500 font-normal">
          © I_Feel_You_2026
        </div>
      </div>
    </footer>
  );
}