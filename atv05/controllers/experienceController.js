const Experience = require('../models/Experience'); 


const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll();
    res.status(200).json(experiences); 
  } catch (error) {
    console.error("Erro ao recuperar experiências:", error);
    res.status(500).json({ message: 'Erro ao recuperar experiências', error: error.message });
  }
};


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
    res.status(201).json(newExperience); 
  } catch (error) {
    console.error("Erro ao criar experiência:", error);
    res.status(500).json({ message: 'Erro ao criar experiência', error: error.message });
  }
};


const updateExperience = async (req, res) => {
  const { id } = req.params; 
  const { year, role, company, description, technologies } = req.body;
  
  try {
    const experience = await Experience.findByPk(id); 
    if (!experience) {
      return res.status(404).json({ message: 'Experiência não encontrada' });
    }
    

    experience.year = year || experience.year;
    experience.role = role || experience.role;
    experience.company = company || experience.company;
    experience.description = description || experience.description;
    experience.technologies = technologies || experience.technologies;
    
    await experience.save(); 
    res.status(200).json(experience);
  } catch (error) {
    console.error("Erro ao atualizar experiência:", error);
    res.status(500).json({ message: 'Erro ao atualizar experiência', error: error.message });
  }
};


const deleteExperience = async (req, res) => {
  const { id } = req.params; 
  
  try {
    const experience = await Experience.findByPk(id); 
    if (!experience) {
      return res.status(404).json({ message: 'Experiência não encontrada' });
    }
    
    await experience.destroy();
    res.status(200).json({ message: 'Experiência deletada com sucesso' }); 
  } catch (error) {
    console.error("Erro ao excluir experiência:", error);
    res.status(500).json({ message: 'Erro ao excluir experiência', error: error.message });
  }
};

module.exports = { getAllExperiences, createExperience, updateExperience, deleteExperience };
