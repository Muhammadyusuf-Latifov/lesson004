import React, { useRef, useState } from "react";
import "./Main.css";
import { BsFillSendPlusFill } from "react-icons/bs";
import { TbCancel } from "react-icons/tb";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Main = () => {
  // state
  const [open, setOpen] = useState(false);
  const [fname, setFname] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [kasb, setKasb] = useState("");
  //  ==============================
  // ref
  const idType = useRef(null);
  const idNumber = useRef(null);
  const authority = useRef(null);
  const issueDate = useRef(null);
  const issueState = useRef(null);
  const expiryDate = useRef(null);
  //  ==============================

  const ohirgi = JSON.parse(localStorage.getItem("malumot")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      id: new Date().getTime(),
      fname,
      birth,
      email,
      number,
      gender,
      kasb,
      idType: idType.current.value,
      idNumber: idNumber.current.value,
      authority: authority.current.value,
      issueDate: issueDate.current.value,
      issueState: issueState.current.value,
      expiryDate: expiryDate.current.value,
    };
    console.log(userInfo);

    const eski = localStorage.getItem("malumot");
    const storage = eski ? JSON.parse(eski) : [];
    storage.push(userInfo);

    localStorage.setItem("malumot", JSON.stringify(storage));

    setEmail("");
    setFname("");
    setBirth("");
    setGender("");
    setKasb("");
    setNumber("");
    setOpen(false);
  };

  return (
    <>
      <section className="main">
        <div className="pt-32 pb-[70px]  container">
          <div className="py-2  flex items-center justify-between mb-8">
            <h3 className="text-[25px] text-[#ca092f] font-bold">
              Personal indormation
            </h3>
            <button
              onClick={() => setOpen(true)}
              className="createBtn bg-[#10aa10] py-[12px] px-[25px] 
                      rounded-[26px] text-[#fff] font-medium  flex items-center gap-x-[5px]"
            >
              Register <MdOutlineCreateNewFolder className="text-[20px]" />
            </button>
          </div>
          {open ? (
            <>
              <div
                onClick={() => setOpen(false)}
                className="w-[100%] h-screen fixed top-0 left-0 bg-[#0000009f]"
              ></div>
              <div className="p-[20px] modal max-w-[750px] w-[100%]  border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f9fb] rounded-[12px]">
                <h3 className="r-title mb-[12px]        text-[30px] ">
                  <span className="text-[#008cff]  underline">Reg</span>
                  <span className="text-[#008cff]">istrtion</span>
                </h3>
                <p className="mb-6 text-[18px] text-[#777777]">
                  Personal Details{" "}
                </p>
                <form onSubmit={handleSubmit} action="">
                  <div className="first__section">
                    <div>
                      <label htmlFor="1">Full Name</label>
                      <input
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        required
                        placeholder="Enter your name"
                        type="text"
                        name=""
                        id="1"
                      />
                    </div>

                    <div>
                      <label htmlFor="2">Date of Birth</label>
                      <input
                        value={birth}
                        onChange={(e) => setBirth(e.target.value)}
                        required
                        placeholder="Enter birth date"
                        type="number"
                        name=""
                        id="2"
                      />
                    </div>

                    <div>
                      <label htmlFor="3">Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        type="email"
                        name=""
                        id="3"
                      />
                    </div>

                    <div>
                      <label htmlFor="4">Mobile Number</label>
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        placeholder="Enter mobile number"
                        type="number"
                        name=""
                        id="4"
                      />
                    </div>

                    <div>
                      <label htmlFor="5">Gender</label>
                      <input
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        placeholder="Enter tour gender"
                        type="text"
                        name=""
                        id="5"
                      />
                    </div>

                    <div className="mb-[26px]">
                      <label htmlFor="6">Occupation</label>
                      <input
                        value={kasb}
                        onChange={(e) => setKasb(e.target.value)}
                        required
                        placeholder="Enter occupation"
                        type="text"
                        name=""
                        id="6"
                      />
                    </div>
                  </div>
                  {/* ---------- 6 gaca -------------- */}
                  <h3
                    className="text-[18px] 
                  mb-6 text-[#817e7e]"
                  >
                    Identity Details
                  </h3>
                  {/*  ===================*/}
                  <div className="first__section">
                    <div>
                      <label htmlFor="7">ID Type</label>
                      <input
                        ref={idType}
                        required
                        placeholder="Enter ID type"
                        type="text"
                        name=""
                        id="7"
                      />
                    </div>

                    <div>
                      <label htmlFor="8">ID number</label>
                      <input
                        ref={idNumber}
                        required
                        placeholder="Enter ID number"
                        type="text"
                        name=""
                        id="8"
                      />
                    </div>

                    <div>
                      <label htmlFor="9">Issue Authority</label>

                      <input
                        ref={authority}
                        required
                        placeholder="Enter issue department"
                        type="text"
                        name=""
                        id="9"
                      />
                    </div>

                    <div>
                      <label htmlFor="10">Issue Date</label>
                      <input
                        ref={issueDate}
                        required
                        placeholder="Enter ID issue date"
                        type="text"
                        name=""
                        id="10"
                      />
                    </div>

                    <div>
                      <label htmlFor="11">Issue state</label>
                      <input
                        ref={issueState}
                        required
                        placeholder="Enter ID issue state"
                        type="text"
                        name=""
                        id="11"
                      />
                    </div>

                    <div>
                      <label htmlFor="12">Expiry date</label>
                      <input
                        ref={expiryDate}
                        required
                        placeholder="Enter ID expiry date"
                        type="text"
                        name=""
                        id="12"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-[30px] gap-x-[20px]">
                    <button
                      className="bg-[#118ff0] text-[#fff] px-[30px] py-[10px] rounded-[10px] flex items-center gap-x-[5px]
                      "
                    >
                      Submit <BsFillSendPlusFill />
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      type="button"
                      className="bg-[#ea1641] text-[#fff] px-[20px] py-[10px] rounded-[10px] flex items-center gap-x-[5px]
                      "
                    >
                      Cancel <TbCancel />
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <></>
          )}

          <table className="st__table border w-[100%] text-left ">
            <thead>
              <tr className="th-table text-[#fff] ">
                <th>Full Name</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Mobile number</th>
                <th>Gender</th>
                <th>Occupation</th>
              </tr>
            </thead>

            <tbody>
              {ohirgi?.map((item) => (
                <tr key={item.id}>
                  <td>{item.fname}</td>
                  <td>{item.birth}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.gender}</td>
                  <td>{item.kasb}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="st__table border w-[100%] text-left ">
            <thead>
              <tr className="th-table text-[#fff] ">
                <th>ID Type</th>
                <th>ID Number </th>
                <th>Issue Authority</th>
                <th>Issue Data</th>
                <th>Issue State</th>
                <th>Expiry Date</th>
              </tr>
            </thead>

            <tbody>
              {ohirgi?.map((item) => (
                <tr key={item.id}>
                  <td>{item.idType}</td>
                  <td>{item.idNumber}</td>
                  <td>{item.authority}</td>
                  <td>{item.issueDate}</td>
                  <td>{item.issueState}</td>
                  <td>{item.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Main;
