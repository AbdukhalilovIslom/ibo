import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Card from "../Card";
import Sidebar from "./Sidebar";
import products from "../../../data/products.json";

export default function AllGames() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Популярные");
  const types = ["Популярные", "По рейтингу", "Дешевле", "Дороже"];
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsSelectOpen(false);
  };

  const [filters, setFilters] = useState({
    platform: {
      ps5: false,
      ps4: false,
    },
    genre: {
      roleplay: false,
      action: false,
      adventure: false,
    },
    priceRange: {
      min: "",
      max: "",
    },
    withDiscount: true,
    localization: {
      russianVoice: false,
      russianSubtitles: false,
    },
    activation: {
      withActivation: false,
      withoutActivation: false,
    },
  });

  const handleCheckboxChange = (category, key) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: value,
      },
    }));
  };

  const resetFilters = () => {
    setFilters({
      platform: {
        ps5: false,
        ps4: false,
      },
      genre: {
        roleplay: false,
        action: false,
        adventure: false,
      },
      priceRange: {
        min: "",
        max: "",
      },
      withDiscount: false,
      localization: {
        russianVoice: false,
        russianSubtitles: false,
      },
      activation: {
        withActivation: false,
        withoutActivation: false,
      },
    });
  };
  return (
    <div className="px-28 py-12 max-sm:p-4 max-sm:pt-0">
      <h1 className="text-3xl text-primary font-bold mb-6 max-sm:mb-5 max-sm:text-base">
        Все игры
      </h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 sm:gap-16">
        <Sidebar />
        <div className="col-span-3 max-sm:col-span-1">
          <div className="flex max-sm:grid max-sm:grid-cols-2 gap-2.5">
            <div className="sm:hidden relative mb-6">
              <div
                className="bg-primary rounded-2xl px-5 py-2.5 flex items-center justify-between gap-16 cursor-pointer max-sm:p-2 max-sm:rounded-lg"
                onClick={() => {
                  setIsFilterOpen((prev) => !prev);
                  setIsSelectOpen(false);
                }}
              >
                <span className="text-lg font-normal max-sm:text-sm">
                  Фильтры
                </span>
                {isFilterOpen ? (
                  <ChevronUp className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                ) : (
                  <ChevronDown className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                )}
              </div>

              {isFilterOpen && (
                <div className="absolute top-full p-2.5 inset-x-0 w-[calc(100vw-32px)] mt-2 bg-primary rounded-2xl shadow-xl z-10 overflow-hidden space-y-2.5">
                  {/* Platform */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl max-sm:text-sm font-bold ">
                      Платформа
                    </h3>
                    <div className="flex gap-2.5">
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.platform.ps5}
                          onChange={() =>
                            handleCheckboxChange("platform", "ps5")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">PS5</span>
                      </label>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.platform.ps4}
                          onChange={() =>
                            handleCheckboxChange("platform", "ps4")
                          }
                          className="w-5 h-5 font-bold border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">PS4</span>
                      </label>
                    </div>
                  </div>

                  {/* Genre */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl max-sm:text-sm font-semibold mb-3">
                      Жанр
                    </h3>
                    <div className="flex gap-2.5">
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.genre.roleplay}
                          onChange={() =>
                            handleCheckboxChange("genre", "roleplay")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Ролевые игры
                        </span>
                      </label>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.genre.action}
                          onChange={() =>
                            handleCheckboxChange("genre", "action")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">Экшен</span>
                      </label>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.genre.adventure}
                          onChange={() =>
                            handleCheckboxChange("genre", "adventure")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Приключения
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl max-sm:text-sm font-semibold">
                      Цена
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="от"
                          value={filters.priceRange.min}
                          onChange={(e) =>
                            handlePriceChange("min", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white text-white rounded-md focus:outline-none placeholder-primary max-sm:p-2 text-[9px] max-sm:rounded-lg"
                        />
                      </div>
                      <span className="max-sm:text-xs font-bold">-</span>
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="до"
                          value={filters.priceRange.max}
                          onChange={(e) =>
                            handlePriceChange("max", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white text-primary rounded-md focus:outline-none placeholder-primary max-sm:p-2 text-[9px] max-sm:rounded-lg"
                        />
                      </div>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.withDiscount}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              withDiscount: !prev.withDiscount,
                            }))
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Со скидкой
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Localization */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl max-sm:text-sm font-semibold">
                      Локализация
                    </h3>
                    <div className="flex gap-2.5">
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.localization.russianVoice}
                          onChange={() =>
                            handleCheckboxChange("localization", "russianVoice")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Русская озвучка
                        </span>
                      </label>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.localization.russianSubtitles}
                          onChange={() =>
                            handleCheckboxChange(
                              "localization",
                              "russianSubtitles"
                            )
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Русские субтитры
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Activation Type */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl max-sm:text-sm font-semibold">
                      Тип активации
                    </h3>
                    <div className="flex gap-2.5">
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.activation.withActivation}
                          onChange={() =>
                            handleCheckboxChange("activation", "withActivation")
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          С активацией
                        </span>
                      </label>
                      <label className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.activation.withoutActivation}
                          onChange={() =>
                            handleCheckboxChange(
                              "activation",
                              "withoutActivation"
                            )
                          }
                          className="w-5 h-5 border-2 border-white rounded accent-white focus:white cursor-pointer"
                        />
                        <span className="max-sm:text-xs font-bold">
                          Без активации
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={resetFilters}
                    className="w-full bg-white text-primary py-3 rounded-md hover:bg-slate-600 transition-colors font-medium max-sm:text-xs max-sm:py-2"
                  >
                    Сбросить всё
                  </button>
                </div>
                // </div>
              )}
            </div>
            <div className="relative flex justify-self-start max-sm:justify-self-stretch mb-6">
              <div
                className="bg-primary rounded-2xl px-5 py-2.5 flex items-center justify-between sm:gap-16 cursor-pointer max-sm:px-2 max-sm:py-2 max-sm:rounded-lg max-sm:w-full"
                onClick={() => {
                  setIsSelectOpen((prev) => !prev);
                  setIsFilterOpen(false);
                }}
              >
                <span className="text-lg font-normal max-sm:text-sm">
                  {selectedType}
                </span>
                {isSelectOpen ? (
                  <ChevronUp className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                ) : (
                  <ChevronDown className="w-6 h-6 max-sm:w-5 max-sm:h-5" />
                )}
              </div>

              {isSelectOpen && (
                <div className="absolute top-full py-1 left-0 right-0 mt-2 bg-primary rounded-2xl shadow-xl z-10 overflow-hidden">
                  {types.map((type, index) => (
                    <div
                      key={index}
                      className="px-5 hover:bg-blue-600 cursor-pointer text-lg font-medium last:border-b-0 max-sm:text-sm max-sm:px-3 max-sm:py-2.5"
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 max-xs:grid-cols-3 gap-6 max-sm:gap-2">
            {products.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
