export default function ReviewsStars() {
  return (
    <div className="main-container text-primary px-[100px] max-lg:px-[15px] mb-[50px] max-lg:[30px]">
      <h2 className="text-[32px] max-lg:text-[20px] max-lg:text-center font-bold mb-[15px] max-lg:mb-[10px] mt-[20px] max-lg:mt-[30px]">
        Отзывы об игре
      </h2>
      <div className="flex justify-between max-lg:flex-col lg:gap-[50px]">
        <div className="flex flex-1 justify-between items-center h-fit max-lg:mt-[10px] max-lg:mb-[20px]">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-12 h-12 bg-gray-300"></div>
            <div className="font-bold">
              <div className="text-[20px]">Покупатель</div>
              <div className="text-[15px]">Отзыв</div>
            </div>
          </div>
          <div className="flex gap-[15px] flex-wrap gap-2 justify-end max-lg:flex-col-reverse">
            <span className="text-end">02.10.2024</span>
            <span className="flex items-center justify-center gap-[5px]">
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
            </span>
          </div>
        </div>
        <div className="w-[283px] max-lg:w-full font-bold">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl font-bold">3,34</div>
            <div className="text-gray-600">/ 5</div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-300 text-xl">★</span>
              <span className="text-gray-300 text-xl">★</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm w-17">5 звёзд</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 lg:max-w-[150px]">
                <div
                  className="bg-yellow-400 h-1 rounded-full"
                  style={{ width: "49%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">49%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm w-17">4 звезды</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 lg:max-w-[150px]">
                <div
                  className="bg-yellow-400 h-1 rounded-full"
                  style={{ width: "7%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">7%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm w-17">3 звезды</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 lg:max-w-[150px]">
                <div
                  className="bg-yellow-400 h-1 rounded-full"
                  style={{ width: "6%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">6%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm w-17">2 звезды</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 lg:max-w-[150px]">
                <div
                  className="bg-yellow-400 h-1 rounded-full"
                  style={{ width: "4%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">4%</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm w-17">1 звезда</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 lg:max-w-[150px]">
                <div
                  className="bg-yellow-400 h-1 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">33%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
