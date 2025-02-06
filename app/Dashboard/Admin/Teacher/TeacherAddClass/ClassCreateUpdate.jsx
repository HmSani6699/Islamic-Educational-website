import React, { useState } from "react";
import InputField from "../../../../Component/InputField/InputField";
import { LuClipboardPenLine } from "react-icons/lu";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ClassCreateUpdate = () => {
  const [addClass, setAddClass] = useState([
    {
      teacherName: "Sadiq",
      category: "Mogtob",
      class: "one",
      classeGroup: "One",
      subject: "arabic",
      startTime: "10:10:02 PM",
      endTime: "11:00:00 PM",
    },
  ]);

  // =====> Add new class <======//
  const handeAddNewClass = () => {
    setAddClass([
      ...addClass,
      {
        teacherName: "Sadiq",
        category: "Mogtob",
        class: "one",
        classeGroup: "One",
        subject: "arabic",
        startTime: "10:10:02 PM",
        endTime: "11:00:00 PM",
      },
    ]);
  };

  // =====> Delete clsss <=====//
  const handleClassDelete = (value) => {
    const filterValue = addClass?.filter((item, i) => i !== value);
    console.log(filterValue);
    setAddClass(filterValue);
  };

  return (
    <div className="w-full  bg-white p-[20px] rounded-[10px] my-10 ">
      {addClass?.map((item, i) => {
        // console.log(addClass[i].teacherName);

        const newIndex = i + 1;
        return (
          <div
            className={`${
              i > 0 && "border-t-[2px] border-[#008000] pt-[30px]"
            }`}
          >
            <div className="flex items-center justify-center">
              <h2
                className={`text-[22px] text-center flex gap-[15px] items-center  font-bold mb-[40px]`}
              >
                <LuClipboardPenLine className="text-[20px] text-[#008000]" />{" "}
                Clsss ( {newIndex} )
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:mb-[20px]">
              <InputField
                title="শিক্ষকের নাম"
                type={"text"}
                placeholder={"শিক্ষকের  নাম লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      teacherName: value,
                    };
                    return updatedClass;
                  })
                }
              />
              <InputField
                title="বিভাগ যোগ করুন"
                type={"text"}
                placeholder={"বিভাগের নাম লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      category: value,
                    };
                    return updatedClass;
                  })
                }
              />
              <InputField
                title="শ্রেণী"
                type={"text"}
                placeholder={"শ্রেণীর নাম লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      class: value,
                    };
                    return updatedClass;
                  })
                }
              />
              <InputField
                title="ক্লাস গ্রুপ"
                type={"text"}
                placeholder={"ক্লাস গ্রূপের নাম লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      classeGroup: value,
                    };
                    return updatedClass;
                  })
                }
              />
              <div className="col-span-2">
                <InputField
                  title="বিষয়"
                  type={"text"}
                  placeholder={"বিষয়ের নাম লিখুন"}
                  setValue={(value) =>
                    setAddClass((prev) => {
                      let updatedClass = [...prev];
                      updatedClass[i] = {
                        ...updatedClass[i],
                        subject: value,
                      };
                      return updatedClass;
                    })
                  }
                />
              </div>
              <InputField
                title="শুরুর সময়"
                type={"time"}
                placeholder={"শুরুর সময় লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      startTime: value,
                    };
                    return updatedClass;
                  })
                }
              />
              <InputField
                title="শেষের সময়"
                type={"time"}
                placeholder={"শেষের সময়র  লিখুন"}
                setValue={(value) =>
                  setAddClass((prev) => {
                    let updatedClass = [...prev];
                    updatedClass[i] = {
                      ...updatedClass[i],
                      endTime: value,
                    };
                    return updatedClass;
                  })
                }
              />
            </div>
            {/* ======> class add delete <==== */}
            {addClass?.length === 1 ? (
              <div className="flex items-center gap-[10px] justify-end">
                <button onClick={handeAddNewClass}>
                  <MdOutlinePostAdd className="text-[25px] text-[#008000]" />
                </button>
              </div>
            ) : addClass?.length === newIndex ? (
              <div className="flex items-center gap-[10px] justify-end">
                <button onClick={handeAddNewClass}>
                  <MdOutlinePostAdd className="text-[25px] text-[#008000]" />
                </button>
                <button onClick={() => handleClassDelete(i)}>
                  <RiDeleteBin6Line className="text-[20px] text-red-500" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-[10px] justify-end mb-[25px]">
                <button onClick={() => handleClassDelete(i)}>
                  <RiDeleteBin6Line className="text-[20px] text-red-500" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ClassCreateUpdate;
