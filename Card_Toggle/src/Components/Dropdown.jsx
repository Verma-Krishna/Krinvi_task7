
import React, { useState, useRef, useEffect } from "react";

function Dropdown() {
  // State to store selected value, dropdown visibility, and roles
  const [selectedOption, setSelectedOption] = useState("Manager");
  const [isOpen, setIsOpen] = useState(false);
  const [roles, setRoles] = useState(["Manager", "Recipient", "Staff"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRole, setNewRole] = useState("");

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown
  };

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole && !roles.includes(newRole)) {
      setRoles([...roles, newRole]);
      setNewRole("");
      setIsModalOpen(false); // Close the modal after adding
    }
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <>
          <div className="mt-10 ml-20">
          <div className="relative inline-block" ref={dropdownRef}>
      <button
        className=" bg-white border-2 border-gray-300 px-4 py-2 rounded-lg shadow-sm flex items-center justify-between w-52"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        {/* Dropdown Icon */}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            {roles.map((role) => (
              <li
                key={role}
                className={`dropdown-option mx-2 rounded-md px-4 py-2 cursor-pointer bg-white hover:bg-blue-100 ${
                  selectedOption === role ? "bg-blue-100" : ""
                }`}
                style={{ padding: "8px" }}
                onClick={() => handleOptionClick(role)}
              >
                {role}
              </li>
            ))}
          </ul>
          {/* Create Role Button */}
          <button
            className="w-48 rounded px-  mb-2 py-2 text-gray-700 flex items-center justify-center  border-2 border-gray-300 m-auto hover:bg-gray-100 "
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Role
          </button>
        </div>
      )}

      {/* Modal Dialog for Create Role */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Create a New Role</h2>
            <input
              type="text"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter role name"
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={handleAddRole}
              >
                Add
              </button>
              <button
                className="ml-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
          </div>
      </>
  );
}

export default Dropdown;





