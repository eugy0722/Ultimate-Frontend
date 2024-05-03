const Newsletter = () => {
  return (
    <div className="w-full px-4 py-12 text-white">
      <div className="mx-auto grid max-w-screen-xl lg:grid-cols-5">
        <div className="my-4 lg:col-span-3">
          <h1 className="py-2 text-xl font-bold sm:text-2xl md:text-3xl">
            Subscreva para mais informações e notificações
          </h1>
          <p className="font-bold">
            Inscreva-se a nossa Newsletter e fique informado.
          </p>
        </div>
        <div className="my-4 lg:col-span-2">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              type="email"
              placeholder="Enter email"
              className="flex w-full rounded-xl p-3 font-medium text-black focus:outline-none"
            />
            <button
              className="my-6 ml-4 w-[200px] rounded-xl bg-emerald-400 px-6 py-3 font-bold text-black 
                        transition  ease-in-out hover:scale-105 hover:bg-emerald-500 active:bg-emerald-600 "
            >
              Notifica-me
            </button>
          </div>
          <p>
            Nós tomamos cuidado sobre a sua protecção e seus dados. Leia mais{" "}
            <span className="cursor-pointer text-emerald-400 underline">
              política de privacidade
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
