import { SlEnergy } from "react-icons/sl";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#111] text-white p-8 relative overflow-hidden"
      dir="rtl"
    >
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute w-[200%] h-[100px] -top-[20%] bg-gradient-to-r from-[#ffffff] via-[#d1d1d1] to-[#111111] opacity-[0.12] -rotate-[40deg] -left-[50%] blur-xl"></div>
        <div className="absolute w-[200%] h-[100px] top-[30%] bg-gradient-to-r from-[#ffffff] via-[#d1d1d1] to-[#111111] opacity-[0.12] -rotate-[40deg] -left-[50%] blur-xl"></div>
        <div className="absolute w-[200%] h-[100px] top-[100%] bg-gradient-to-r from-[#ffffff] via-[#d1d1d1] to-[#111111] opacity-[0.12] -rotate-[40deg] -left-[50%] blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-18 mt-8">
          <h1 className="text-2xl mb-6 font-bold">
            <span className="relative inline-block">
              <span className="relative z-10"> پلن‌های اشتراکی نماباز؛</span>
              <span className="absolute left-0 -bottom-0.5 w-full h-1 bg-[#b9001e] rounded z-0"></span>
            </span>
            <span className="text-[#969696] mr-2">دسترسی کامل</span>
          </h1>
          <p className="text-[#969696] text-2xl font-bold">
            به پشت صحنه دنیای فیلم‌ها!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="w-[360px] h-[500px] bg-[#202020] rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-3">
                <SlEnergy size={24} />
                <div className="mb-4">
                  <p className="mb-2">اشتراک ۱ ماهه </p>
                  <p className="text-[#969696] text-[9px]">
                    ۱ ماه کاوش در دنیای فیلم ها.
                  </p>
                </div>
              </div>
              <p className="text-3xl pb-4 border-b-[1px] border-[#404040] mt-4">
                ۵۹,۹۰۰ تومان
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    دسترسی به تمام جزئیات فیلم ها (نورپردازی، ژانر، ...)
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    قابلیت جستجوی پیشرفته در اطلاعات فیلم ها
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    مشاهده پشت صحنه و تحلیل های تخصصی
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    ذخیره اطلاعات دلخواه برای دسترسی سریع
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    صرفه جویی اقتصادی نسبت به اشتراک ماهانه
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    پشتیبانی ویژه کاربران اشتراکی
                  </span>
                </p>
              </div>
            </div>
            <button className="bg-[#202020] border-2 border-[#969696] p-2 rounded-xl cursor-pointer hover:bg-[#303030] hover:scale-105 transition-transform duration-300">
              خرید اشتراک
            </button>
          </div>
          <div className="w-[360px] h-[500px] bg-[#202020] rounded-3xl p-6 flex flex-col justify-between lg:-mt-5">
            <div>
              <div className="flex gap-3">
                <SlEnergy size={24} />
                <div className="mb-4">
                  <p className="mb-2">
                    اشتراک ٣ ماهه{" "}
                    <span className="bg-[#454545] px-3 py-0.5 rounded-3xl text-[10px]">
                      محبوب ترین
                    </span>
                  </p>
                  <p className="text-[#969696] text-[9px]">
                    ٣ ماه کاوش در دنیای فیلم ها.
                  </p>
                </div>
              </div>
              <p className="text-3xl pb-4 border-b-[1px] border-[#404040] mt-4">
                ۱۲۹,۹۰۰ تومان
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    دسترسی به تمام جزئیات فیلم ها (نورپردازی، ژانر، ...)
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    قابلیت جستجوی پیشرفته در اطلاعات فیلم ها
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    مشاهده پشت صحنه و تحلیل های تخصصی
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    ذخیره اطلاعات دلخواه برای دسترسی سریع
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    صرفه جویی اقتصادی نسبت به اشتراک ماهانه
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    پشتیبانی ویژه کاربران اشتراکی
                  </span>
                </p>
              </div>
            </div>
            <button className="bg-[#b9001e] p-2 rounded-xl cursor-pointer hover:bg-[#b9001fb3] hover:scale-105 transition-transform duration-300">
              خرید اشتراک
            </button>
          </div>
          <div className="w-[360px] h-[500px] bg-[#202020] rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-3">
                <SlEnergy size={24} />
                <div className="mb-4">
                  <p className="mb-2">اشتراک ۶ ماهه </p>
                  <p className="text-[#969696] text-[9px]">
                    ۶ ماه کاوش در دنیای فیلم ها.
                  </p>
                </div>
              </div>
              <p className="text-3xl pb-4 border-b-[1px] border-[#404040] mt-4">
                ۳۳۹,۹۰۰ تومان
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    دسترسی به تمام جزئیات فیلم ها (نورپردازی، ژانر، ...)
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    قابلیت جستجوی پیشرفته در اطلاعات فیلم ها
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    مشاهده پشت صحنه و تحلیل های تخصصی
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    ذخیره اطلاعات دلخواه برای دسترسی سریع
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    صرفه جویی اقتصادی نسبت به اشتراک ماهانه
                  </span>
                </p>

                <p className="flex gap-0.5 items-center">
                  <IoIosCheckmarkCircleOutline size={20} color="#969696" />{" "}
                  <span className="text-[10px] text-[#969696]">
                    پشتیبانی ویژه کاربران اشتراکی
                  </span>
                </p>
              </div>
            </div>
            <button className="bg-[#202020] border-2 border-[#969696] p-2 rounded-xl cursor-pointer hover:bg-[#303030] hover:scale-105 transition-transform duration-300">
              خرید اشتراک
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
