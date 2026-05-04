export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/f5489fd9-1696-4d08-956c-9a70545cdb60/files/b6c52b38-18db-4b2f-8055-23eb2a200a76.jpg"
          alt="Книги и атмосфера"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Для тех, кто не виноват, что забросил</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Школьники, студенты, уставшие офисники, молодые родители — все, кто хочет говорить о книгах, но боится показаться скучным или глупым.
          Здесь таких нет.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Наши рецензии
        </button>
      </div>
    </div>
  );
}