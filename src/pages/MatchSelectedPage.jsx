import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";


function MatchSelectedPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="self-stretch w-full bg-stone-50 min-h-[85px] max-md:max-w-full" />
      <div className="mt-6 text-3xl font-bold text-center text-black whitespace-nowrap">
        List of your matches
      </div>
      <div className="mt-2.5 text-xs font-bold text-center text-black whitespace-nowrap">
        Match 1
      </div>
      <div className="flex overflow-hidden relative flex-col items-end py-1 pl-20 w-full fill-white max-w-[984px] min-h-[765px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b9efef12f5386c5a1ba3b1e79bb691a18fec8b8ebcb2c4c4c66afbbc50e636?apiKey=319352577b174a1ea58e2124bae2c0e0&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col px-8 pt-11 pb-3.5 max-w-full fill-white min-h-[516px] w-[615px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2c19983137954ce725a36a43cfb9ef4ced0446809346c897b55cd756beae41?apiKey=319352577b174a1ea58e2124bae2c0e0&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative px-0.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                <div className="flex relative grow gap-5 justify-between px-px text-xs font-bold text-center text-black max-md:mt-10">
                  <div className="flex flex-col flex-1">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4eab426e5aa3dab14e7f99032558e26d4443e633d086ed552dd258f67df58852?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                      className="self-center border-2 border-rose-500 border-solid shadow-sm aspect-[1.22] w-[202px]"
                    />
                    <div className="mt-5">Details to highlight</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb5a604a4a491623c34577ec937e286e405445d7b5dd69b25975f480beab5aa?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                    className="shrink-0 my-auto w-20 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5093e629391d6cac305ff030157dc7afa291f2ed324d44bef527475c4bd9859a?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                  className="shrink-0 max-w-full border-2 border-rose-500 border-solid shadow-sm aspect-[1.16] w-[191px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="flex relative gap-2.5 self-center mt-2.5 whitespace-nowrap leading-[150%]">
            <div className="flex gap-0.5 justify-center px-3 py-2.5 text-xs text-white bg-rose-500 shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2659a2baf6df71d66ae541c417c56dffbfcfb0155e705a5cf53f0b91353bd3c4?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 aspect-[1.12] w-[18px]"
              />
              <div className="grow my-auto">98% match</div>
            </div>
            <div className="flex gap-2 justify-end px-4 py-2 text-sm text-black bg-white shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c1d3bc71cdb116545c9bd2f58979db9e52db0487af82e2492e6719ae585c0f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 w-5 aspect-square"
              />
              <div className="grow">Photography</div>
            </div>
          </div>
          <div className="flex relative gap-2.5 self-center px-0.5 mt-3 text-sm leading-5 text-black whitespace-nowrap">
            <div className="flex gap-2 px-4 py-1.5 bg-white shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ab0b7acb6446cf3582bd897c811ce568ec67297f2e21bf9cb0c7011fd8807f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 self-start w-5 aspect-square"
              />
              <div>Gaming</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bf91052667d0c447312956ca8bbc8c06e027e14a7649a90fa4195442abf4d?apiKey=319352577b174a1ea58e2124bae2c0e0&"
              className="shrink-0 shadow-sm aspect-[2.7] rounded-[50px] w-[93px]"
            />
            <div className="flex gap-2 px-4 py-2 bg-white shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1742ffadcda6e3c254d2d92f62082e95242e4e513371521a6ee05d068b597ff9?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 w-5 aspect-square"
              />
              <div>Travel</div>
            </div>
          </div>
          <div className="flex relative gap-2.5 self-center mt-3 text-sm leading-5 whitespace-nowrap">
            <div className="flex gap-2 justify-end px-4 py-2.5 text-white bg-rose-500 shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5ffd33af651b0705ad53046c46c1b47cec5ab524b789730c9c5f56df49092f5?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 w-5 aspect-square"
              />
              <div>Painting</div>
            </div>
            <div className="flex gap-2 justify-end px-4 py-2.5 text-black bg-white shadow-sm rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d6bc92c30b181e51a3c1b86a50c1d14aa0054c87c61114b7437315bace721e?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 w-5 aspect-square"
              />
              <div>Politics</div>
            </div>
          </div>
          <div className="relative self-start mt-5 ml-3 text-xs font-bold text-center text-black whitespace-nowrap max-md:ml-2.5">
            List of Messages:
          </div>
          <div className="relative shrink-0 bg-white rounded-3xl border border-rose-500 border-solid h-[92px] max-md:max-w-full" />
        </div>
        <div className="relative mt-4 text-xs font-bold text-center text-black max-md:max-w-full">
          Match 2
        </div>
        <div className="relative mt-9 mr-14 max-w-full w-[508px] max-md:mr-2.5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-center text-sm font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c70611c34f443e7ffd440c6d7ed90a4d4a01e735ecc8eb66f3007b2f18a9a62?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                  className="border-2 border-rose-500 border-solid shadow-sm aspect-[1.2] w-[177px]"
                />
                <div className="mt-2">Samuel</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05242e03f9e103b5981014e6c693aa59241f916d3444d642e7aba81f1e5c01a7?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                className="shrink-0 self-stretch my-auto w-20 aspect-square max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-center text-sm font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58f097eb9418806ad2f72584c2b510af2bfbb635868f217293254a883c091e4f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                  className="border-2 border-rose-500 border-solid aspect-[1.28] w-[185px]"
                />
                <div className="mt-3.5">Coco</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pt-4 pb-7 mt-8 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3346252de73630fc891427e3ff30d4784786e1c7ac4fb5724ce1920ae280c14b?apiKey=319352577b174a1ea58e2124bae2c0e0&"
          className="max-w-full aspect-[11.11] w-[311px]"
        />
      </div>
    </div>
    )
}
export default MatchSelectedPage;