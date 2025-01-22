import Header from "./components/header"

export default function rootPage() {
	return (
            <>
                  <div className="relative flex flex-col min-h-screen">
                        <Header />
                        <div className="relative rounded-2xl w-[93dvw] h-80 bg-blue-400 bg-opacity-80 overflow-hidden mx-10">
                              <div className="absolute bottom-0 left-0 size-60 bg-blue-500 rounded-tr-full bg-opacity-45"></div>
                        </div>
                  </div>
            </>
      )
}
