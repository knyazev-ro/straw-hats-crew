import React, { useState } from 'react';

const EditChallenge = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    name: '',
    description: '',
    type: '',
    achivementId: '',
    teams: [],
  });

  const achievements = [
    {id:1 , title: "GOOD BOY"},
    {id:2 , title: "CRAZY DUDE"},
    {id:2 , title: "CHILL GIRL"},
  ];
  
  const challengeTypes =[
    {id:1 , title: "Одиночное"},
    {id:2 , title: "Командное"},
    {id:2 , title: "Семейное"},
  ];

  const onSmbt = (e) => {
    console.log(e);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTeamSelection = (teamId) => {
    setFormData((prevData) => ({
      ...prevData,
      teams: prevData.teams.includes(teamId)
        ? prevData.teams.filter((id) => id !== teamId)
        : [...prevData.teams, teamId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-yellow-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">Создать новый Челлендж</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Название</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
          />
        </div>

        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Тип Челленджа</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
            required
          >
            {challengeTypes.map((type) => (
                <option key={type.id} value = {type.title}>
                    {type.title}
                </option>
        ))}
          </select>
        </div>

        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Дата начала</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Дата окончания</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-yellow-700 font-semibold mb-1">Достижение</label>
          <select
            name="achivementId"
            value={formData.achivementId}
            onChange={handleChange}
            className="w-full p-2 border border-yellow-300 rounded"
            required
          >
            {achievements.map((achievement) => (
              <option key={achievement.id} value={achievement.id}>
                {achievement.title}
              </option>
            ))}
          </select>
        </div>

        {/* <div>
          <label className="block text-yellow-700 font-semibold mb-1">Команды</label>
          <div className="grid grid-cols-2 gap-2">
            {teams.map((team) => (
              <label key={team.id} className="flex items-center text-yellow-700">
                <input
                  type="checkbox"
                  name="teams"
                  checked={formData.teams.includes(team.id)}
                  onChange={() => handleTeamSelection(team.id)}
                  className="mr-2"
                />
                {team.name}
              </label>
            ))}
          </div>
        </div> */}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-600 text-white rounded font-semibold hover:bg-yellow-700 transition duration-200"
        >
          Создать Челлендж
        </button>
      </form>
    </div>
  );
};

export default EditChallenge;
