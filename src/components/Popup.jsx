import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreasePoints } from "../RTK/Slices/points";
import { createTicket } from "../RTK/Slices/APIs/tickets";
import { handlePopup } from "../RTK/Slices/popup";
import { FaExclamation, FaX } from "react-icons/fa6";

// countries
const countries = [
  "Egypt",
  "Germany",
  "Russia",
  "United Kingdom",
  "Italy",
  "China",
  "India",
  "United States",
  "France",
  "Ukraine",
  "Spain",
];

// Monthes
const monthAbbreviations = [
  "Jan", // 0
  "Feb", // 1
  "Mar", // 2
  "Apr", // 3
  "May", // 4
  "Jun", // 5
  "Jul", // 6
  "Aug", // 7
  "Sep", // 8
  "Oct", // 9
  "Nov", // 10
  "Dec", // 11
];

// generate serial number code
function generateSerialNumber(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let serial = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    serial += chars[randomIndex];
  }
  return serial;
}

const Popup = () => {
  const dispatch = useDispatch();
  const { points, title } = useSelector((state) => state.popup); // Define the popup state type

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
  });

  const handleTicketPrint = (event) => {
    event.preventDefault();
    // decrease points from total points
    dispatch(decreasePoints(Number(points)));
    // change popup status to hidden
    dispatch(handlePopup({ status: false }));

    // get data
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth();
    const day = data.getDate();
    // form data
    const { username, email, country } = formData;
    const ticketCode = generateSerialNumber(15);
    dispatch(
      createTicket({
        user_name: username,
        email: email,
        country: country,
        distnation: title || "Tuna El-Jabal",
        date: `${day}-${monthAbbreviations[month]}-${year}`,
        ticket_code: ticketCode,
      })
    );

    const printWindow = window.open();
    const printContent = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title} Ticket</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #F5EFE6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header h1 {
          font-size: 28px;
          color: #F2C94C;
          margin: 0;
        }
        .content {
          margin: 20px 0;
        }
        .content h1 {
          font-size: 18px;
          margin: 10px 0;
        }
        .ticket-details {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .ticket-details th, .ticket-details td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .ticket-details th {
          background-color: #007BFF;
          color: #fff;
          text-align: left;
        }
        .ticket-details td {
          text-align: left;
        }
        .ticket-details td:first-child {
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <div class="header">
          <h1>Minya Tours</h1>
        </div>
        <div class="content">
          <table class="ticket-details">
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>${formData.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>${formData.email}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>${formData.country}</td>
            </tr>
            <tr>
              <td>Ticket to</td>
              <td>${title}</td>
            </tr>
            <tr>
              <td>Date of Request</td>
              <td>${day}-${monthAbbreviations[month]}-${year}</td>
            </tr>
            <tr>
              <td>Ticket Code</td>
              <td>${ticketCode}</td>
            </tr>
          </table>
        </div>
      </div>
    </body>
  </html>
`;

    printWindow?.document.write(printContent);
    printWindow?.document.close();
    printWindow?.print();
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,.4)] backdrop-blur-lg">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 py-10 md:py-14 bg-white rounded-xl flex items-center flex-col gap-4 min-w-[240px] md:min-w-[400px] lg:min-w-[500px]">
        <button
          onClick={() => {
            dispatch(handlePopup({ status: false }));
          }}
          className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded w-[40px] h-[40px] font-bold flex items-center justify-center"
        >
          <FaX />
        </button>
        <h2 className="text-xl font-bold text-lightYellow md:text-2xl md:mb-5">
          {title}
        </h2>
        <form
          className="flex flex-col gap-3 md:gap-5 w-full"
          onSubmit={(e) => handleTicketPrint(e)}
        >
          <div className="flex gap-1 md:gap-3 flex-col md:flex-row md:items-center">
            <label
              htmlFor="name"
              className="text-lg md:text-2xl text-broun min-w-[100px]"
            >
              Name
            </label>
            <input
              type="text"
              name="username"
              id="name"
              required
              placeholder="Enter Your Name"
              className="bg-lightBage rounded outline-none border-none py-1 px-3 w-full text-black"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-1 md:gap-3 flex-col md:flex-row md:items-center">
            <label
              htmlFor="email"
              className="text-lg md:text-2xl text-broun min-w-[100px]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your Email"
              className="bg-lightBage rounded outline-none border-none py-1 px-3 w-full text-black"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-1 md:gap-3 flex-col md:flex-row md:items-center">
            <label
              htmlFor="country"
              className="text-lg md:text-2xl text-broun min-w-[100px]"
            >
              Country
            </label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="bg-lightBage rounded outline-none border-none py-1 px-3 w-full text-black"
              required
            >
              <option></option>
              {countries.map((country, index) => {
                return (
                  <option key={index} value={country} className="font-bold">
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            type="submit"
            className="btn w-full mx-auto rounded bg-lightYellow hover:bg-lightGold text-xl mt-5"
          >
            Print
          </button>
          <small className="text-red-500 flex items-center gap-2 w-fit mx-auto">
            <span className="rounded-full bg-red-500 text-white p-1">
              <FaExclamation />
            </span>
            Warning once you move to the printing page, your stars will be
            deducted
          </small>
        </form>
      </div>
    </div>
  );
};

export default Popup;
