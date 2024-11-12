const Experience = require('../models/Experience'); // Importando o modelo

// Função para recuperar todas as experiências
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll();
    res.status(200).json(experiences); // Retornando as experiências em formato JSON
  } catch (error) {
    console.error("Erro ao recuperar experiências:", error);
    res.status(500).json({ message: 'Erro ao recuperar experiências', error: error.message });
  }
};

// Função para criar uma nova experiência
const createExperience = async (req, res) => {
  const { year, role, company, description, technologies } = req.body;
  
  try {
    const newExperience = await Experience.create({
      year, 
      role, 
      company, 
      description, 
      technologies
    });
    res.status(201).json(newExperience); // Retorna a experiência criada
  } catch (error) {
    console.error("Erro ao criar experiência:", error);
    res.status(500).json({ message: 'Erro ao criar experiência', error: error.message });
  }
};

// Função para atualizar uma experiência
const updateExperience = async (req, res) => {
  const { id } = req.params; // Recuperando o id da experiência que será atualizada
  const { year, role, company, description, technologies } = req.body;
  
  try {
    const experience = await Experience.findByPk(id); // Encontrar a experiência pelo ID
    if (!experience) {
      return res.status(404).json({ message: 'Experiência não encontrada' });
    }
    
    // Atualizando a experiência
    experience.year = year || experience.year;
    experience.role = role || experience.role;
    experience.company = company || experience.company;
    experience.description = description || experience.description;
    experience.technologies = technologies || experience.technologies;
    
    await experience.save(); // Salvando as alterações
    res.status(200).json(experience); // Retorna a experiência atualizada
  } catch (error) {
    console.error("Erro ao atualizar experiência:", error);
    res.status(500).json({ message: 'Erro ao atualizar experiência', error: error.message });
  }
};

// Função para excluir uma experiência
const deleteExperience = async (req, res) => {
  const { id } = req.params; // Recuperando o id da experiência a ser deletada
  
  try {
    const experience = await Experience.findByPk(id); // Encontrar a experiência pelo ID
    if (!experience) {
      return res.status(404).json({ message: 'Experiência não encontrada' });
    }
    
    await experience.destroy(); // Excluindo a experiência
    res.status(200).json({ message: 'Experiência deletada com sucesso' }); // Resposta após a exclusão
  } catch (error) {
    console.error("Erro ao excluir experiência:", error);
    res.status(500).json({ message: 'Erro ao excluir experiência', error: error.message });
  }
};

module.exports = { getAllExperiences, createExperience, updateExperience, deleteExperience };
