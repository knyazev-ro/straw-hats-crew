import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditTeam = () => {
  const { id } = useParams();
  const [teamName, setTeamName] = useState("");
  const [leadId, setLeadId] = useState("");
  const [challengeId, setChallengeId] = useState("");
  const [users, setUsers] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Загрузка списка пользователей и челленджей для выбора
    const fetchUsersAndChallenges = async () => {
      try {
        const [usersResponse, challengesResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/users"),
          axios.get("http://localhost:5000/api/challenges"),
        ]);
        setUsers(usersResponse.data);
        setChallenges(challengesResponse.data);
      } catch (error) {
        setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
      }
    };
    fetchUsersAndChallenges();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/teams", {
        name: teamName,
        leadId: Number(leadId),
        challengeId: Number(challengeId),
      });

      if (response.status === 201) {
        setSuccessMessage("Команда успешно создана!");
        setTeamName("");
        setLeadId("");
        setChallengeId("");
      }
    } catch (error) {
      setError("Ошибка при создании команды. Пожалуйста, попробуйте снова.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Создать команду
      </h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-600 mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Название команды */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="teamName"
          >
            Название команды
          </label>
          <input
            id="teamName"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Лидер команды */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="leadId"
          >
            Лидер команды
          </label>
          <select
            id="leadId"
            value={leadId}
            onChange={(e) => setLeadId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Выберите лидера</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* Челлендж для команды */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="challengeId"
          >
            Челлендж
          </label>
          <select
            id="challengeId"
            value={challengeId}
            onChange={(e) => setChallengeId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Выберите челлендж</option>
            {challenges.map((challenge) => (
              <option key={challenge.id} value={challenge.id}>
                {challenge.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Создать команду
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
