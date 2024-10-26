const express = require("express");
const teamServices = require("../services/teamService");
const { parseEnv } = require("util");

//Создание команды
exports.create = async (req, res) => {
  try {
    const teamData = req.body;
    const team = await teamServices.create(teamData);
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create team" });
  }
};

//Удаление команды
exports.delete = async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    await teamServices.delete(teamId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete team" });
  }
};
//Добавление участника
exports.addUser = async (req, res) => {
  try {
    const teamId = parseInt(req.params.teamId);
    const { userId } = req.body;
    const updateTeam = await teamServices.addUser(teamId, userId);
    res.status(200).json(updateTeam);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to add user to team" });
  }
};
//Удаление участника
exports.removeUser = async (req, res) => {
  try {
    const teamId = parseInt(req.params.teamId);
    const { userId } = req.body;
    const updatedTeam = await teamServices.removeUser(teamId, userId);
    res.status(200).json(updatedTeam);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to remove user from team" });
  }
};

//Поиск команды по ID
exports.findById = async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    const team = await teamServices.findById(teamId);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//Поиск всех
exports.findAll = async (req, res) => {
  try {
    const teams = await teamServices.findAll();
    res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
