import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Editable from "../../components/editable/Editable";
import CurrentlyEditing from "../../components/editable/CurrentlyEditing";

function PersonManager() {
  const [inputValue, setInputValue] = useState('');
  const [newUserValue, setNewUserValue] = useState('');
  const [isEditing, setIsEditing] = useState<number>(-1);
  const [persons, setPersons] = useState<string[]>(["abc", "def", "ghi", "manastur", "grigorescu"]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  };

  function handleUserEdit(e) {
    setNewUserValue(e.target.value);
  };

  function handleAddClick() {
    if (inputValue.trim() !== '') {
      setPersons(prevPersons => [...prevPersons, inputValue]);
      setInputValue('');
    }
  };

  function handleDelete(index: number) {
    setPersons(persons.filter((_, i) => i !== index));
  };

  function startEditing(index: number) {
    setNewUserValue(persons[index]);
    setIsEditing(index);
  };

  function saveNewUserValue(index: number) {
    if (newUserValue.trim() !== '') {
      setPersons(persons.map((person, i) => i === index ? newUserValue : person));
      setIsEditing(-1);
    }
  };

  return (
    <div className="container mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter person"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {persons.map((person, index) => (
          <li key={index} className="list-group-item">
            {index === isEditing ?
              (
                <CurrentlyEditing
                  onSave={() => saveNewUserValue(index)}
                  className="d-flex justify-content-between align-items-center"
                >
                  <input
                    type="text"
                    value={newUserValue}
                    onChange={handleUserEdit}
                    className="form-control me-2"
                    placeholder="Enter person"
                  />
                </CurrentlyEditing>
              ) : (
                <Editable
                  index={index}
                  enableEditing={isEditing === -1}
                  onUpdate={() => startEditing(index)}
                  onDelete={() => handleDelete(index)}
                  className="d-flex justify-content-between align-items-center"
                >
                  {person}
                </Editable>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonManager;